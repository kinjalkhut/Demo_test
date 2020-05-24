import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList,Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Images } from '../utils/Images'
import { TextField } from '../components/material-textfield'
import { onLogin} from '../redux/loginReducer'
import OAuthManager from 'react-native-oauth';
import { manager} from '../utils/services'

function LoginScreen({ navigation }) {
    const [Email, setemail] = useState('')
    const [Password, setPassword] = useState('')
    const [error, setError] = useState([])
    const dispatch = useDispatch();
    const isloggedIn = useSelector(state => state.loginReducer.isLoggedIn)

    useEffect(()=>{

      if(isloggedIn){
        navigation.navigate('Home')
      }
    },[isloggedIn])

    function onlogin(){
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let error =[]
      if(!reg.test(Email)){
        error.push('Invalid email address')
       }else{
         const i = error.findIndex(e=> e=='Invalid email address')
         error.splice(i,1)
       } if(Password.length < 8){
         error.push('Must be atleast of 8 Characters')
       }else{
        const i = error.findIndex(e=> e=='Must be atleast of 8 Characters')
        error.splice(i,1)
       }

       if(reg.test(Email) && Password.length >= 8){
        dispatch(onLogin({
          Email,
          Password
        }, false))
       }

       setError(error)
    }

  function onGithubSignup(){
    
    manager.authorize('github')
    .then(resp =>{ 
      if(resp.response.credentials.accessToken){
        dispatch(onLogin({}, true))
       }
      
  })
    
 }

  return (
    <View style={styles.container}>
    <KeyboardAvoidingView behavior={'position'} style={styles.container}>
      <View style={styles.viewContainer}></View>
       <View style={styles.logoContainer}>
           <Image source={Images.logo} style={styles.logo}/>
       </View>
       <View style={styles.loginContainer}>
           <Text style={styles.header}>Login</Text>
           <TextField
            label={'Email Address'}
            style={styles.TextField}
            labelTextStyle={styles.TextField}
            titleTextStyle={styles.TextField}
            onChangeText={(text)=>setemail(text)}
            value={Email}
          />
          <TextField
            label={'Password'}
            style={styles.TextField}
            labelTextStyle={styles.TextField}
            titleTextStyle={styles.TextField}
            onChangeText={(text)=>setPassword(text)}
            value={Password}
          />

          {error.length !=0 && error.map(data=> <Text style={styles.errorStyle}>{data}</Text>)}
       </View>
       <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.githhubButton} onPress={onGithubSignup}>
         <Image source={Images.github} style={styles.github}/>
            <Text style={styles.githubText}>Sign in with github</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.loginButton} onPress={onlogin}>
            <Text style={styles.githubText}>Login</Text>
         </TouchableOpacity>
       </View>
     
    </KeyboardAvoidingView>
    <View style={styles.footerContainer}>
            <Image source={Images.footer} style={styles.footer}/>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  viewContainer:{
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 200,
    // borderRightWidth: 400,
    // borderTopWidth: 400,
    borderRightColor: 'transparent',
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    transform: [{ rotate: '90deg' }]
  },
  logoContainer:{
   marginTop:'25%'
  },
   logo:{
    height:100,
    width:100,
  
  },
  loginContainer:{
  marginHorizontal:'5%'
   },
  header:{
      fontSize : 20,
      fontWeight:'bold',
      marginVertical:30
  },
  footerContainer:{
      flex:1,
    position:'absolute',
    // top: 15,
    // right: 10,
    width : '100%',
    bottom:0
  },
  footer:{
    height : 110,
    width:'100%'

  },
  TextField:{
    color: 'black',
    fontSize: 16,
    letterSpacing: 1,
    // backgroundColor: 'transparent'
  },
  buttonContainer:{
    // flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    top:'5%'
  },
  githhubButton:{
    padding:10,
    backgroundColor:'black',
    flexDirection:'row'
  },
  githubText:{
    color:'white',
    alignSelf:'center',
    marginLeft:'2%'
  },
  loginButton:{
borderBottomLeftRadius:25,
borderTopLeftRadius:25,
backgroundColor:'orange',
width:'30%',
alignItems:'center',
justifyContent:'center'
  },
  errorStyle:{
    color:'red',
    top:'2%'
  },github:{
    height:30,
    width:40,
    tintColor:'white'
  }
})

export default LoginScreen
