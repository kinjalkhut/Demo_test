import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList,Text, TouchableOpacity, Image, KeyboardAvoidingView,TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { EditProfile, logout, onLogout} from '../redux/loginReducer'
import { Images } from '../utils/Images'
import Video from 'react-native-video';
import { TextField } from '../components/material-textfield'

function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.loginReducer.userDetails)
  const isSocialLogin = useSelector(state => state.loginReducer.isSocialLogin)
  const [Email, setemail] = useState('')
  const [Username, setUsername] = useState('')  
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [onEdit, setOnEdit] = useState(false)

  useEffect(()=>{
    // dispatch(getVideos())
    if(userDetails){
    setemail(userDetails.email)
    setUsername(userDetails.username)  
     setPhoneNumber(userDetails.phoneNumber && userDetails.phoneNumber.toString())
  }
},[userDetails])

 function EditUserDetails(){
    if(onEdit){
        const userDetails ={
            username : Username,
            email : Email,
            phoneNumber :parseInt( PhoneNumber)
          }
    dispatch(EditProfile(userDetails))
    setOnEdit(false)
    }else{
        setOnEdit(true)
    }
 }

 function onlogout(){
   
     dispatch(onLogout(isSocialLogin))
     navigation.navigate('authStack')
 }

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.profileText}>Profile</Text>
        <TouchableOpacity onPress={onlogout}>
        <Image source={Images.logout} style={styles.logout}/>
        </TouchableOpacity>
        </View>
          
        <View style={{flex:1,justifyContent:'center'}}>
      
        <View style={styles.profileDetailsContainer}>
        <View style={{width:'100%',alignItems:'center',bottom:'10%'}}>
            <Image source={Images.logo} style={styles.profile}/>
            <Text style={styles.ProfileName}>{Username}</Text>
            </View>
            <View style={{width:'90%',marginLeft:'5%'}}>
            <TextField
            // label={'Email Address'}
            style={styles.TextField}
            titleTextStyle={[styles.TextField]}
            renderAccessory={()=><Text>Username</Text>}
            onChangeText={(text)=>setUsername(text)}
            value={Username}
            editable ={onEdit}
          />
          <TextField
            // label={'Email Address'}
            style={styles.TextField}
            titleTextStyle={[styles.TextField]}
            renderAccessory={()=><Text>Mobile Number</Text>}
            onChangeText={(text)=>setPhoneNumber(text)}
            value={PhoneNumber}
            editable ={onEdit}
          />
          <TextField
            // label={'Email Address'}
            style={styles.TextField}
            titleTextStyle={[styles.TextField]}
            renderAccessory={()=><Text>Email [optional]</Text>}
            onChangeText={(text)=>setemail(text)}
            value={Email}
            editable ={onEdit}
          />
       
           </View>
           <TouchableOpacity style={styles.buttonContainer} onPress={EditUserDetails}>
                <Text style={styles.buttonText}>{onEdit? 'Save' : 'Edit'}</Text>
           </TouchableOpacity>
           
        </View>
        </View>
       
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f59942',
    // justifyContent:'center',
    // width:'90%',
    paddingHorizontal:'5%'
  },
  headerContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    top:'20%'
    // justifyContent:'space-around'
  },
  logout:{
    height:40,
    width:40,
    alignItems:'flex-end'
  },
  profile:{
    height:100,
    width:100,
    borderRadius:50
    // alignItems:'flex-end'
  },
  profileText:{
    color:'white',
    fontSize:20,
    width:'85%',
    textAlign:'center'
// marginLeft:'50%'
  },
  header:{
    color:'black',
    fontWeight:'bold',
    fontSize:20
  },
  profileDetailsContainer:{
    // height:200,
    width:'90%',
    borderRadius:20,
    backgroundColor:'white',
    alignSelf:'center',
    // justifyContent:'center'
  },
  ProfileName:{
      fontSize:25,
    //   fontWeight:'bold',
      textAlign:'center',
      width:'100%',
    //   backgroundColor:'red'
  },
  TextField:{
    color: 'black',
    fontSize: 16,
    letterSpacing: 1,
    // width:'90%'
    // marginHorizontal:'2%'
// textAlign:'right'
    // backgroundColor: 'transparent'
  },
  buttonContainer:{
    //   position:'absolute',
      top:'5%',
      height: 40,
      width:100,
      alignSelf:'center',
      backgroundColor:'black',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center'

  },
  buttonText:{
      color:'white'
  }
 
})

export default ProfileScreen
