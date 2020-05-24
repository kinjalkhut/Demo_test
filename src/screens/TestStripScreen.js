import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList,Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView,TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { TextField } from '../components/material-textfield'

import { gettestStrips} from '../redux/homeReducer'
import { Images } from '../utils/Images'

function TestStripScreen({ navigation }) {
  const dispatch = useDispatch();
  const testStripList = useSelector(state => state.homeReducer.testStripList)
  const [testStips, settestStips] = useState([])

  useEffect(()=>{
      dispatch(gettestStrips())
  },[])

  useEffect(()=>{
    // dispatch(gettestStrips())
    console.warn("22",testStripList)
    settestStips(testStripList)
},[testStripList])

function onChangeInput(text, item){
    console.warn("33",item)
    const list =[...testStips]
    const range = item.range.filter(data=> data.value == parseInt( text))
    console.warn("11",range)
    const i = testStips.findIndex(e=> e.id == item.id)
    if(range.length !=0){
    list[i] = {...list[i], isSelected : range[0] }
    }
    settestStips(list)
}

function  renderItem({item, index}){
    // console.warn("2",item)
        return(
        <View style={{ flexDirection:'row'}}>
          <View style={styles.selectionStripCont}>
         

          </View>
          
        <View>
            <View style={{flex:1, flexDirection:'row',  alignItems:'center',  }}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{flex:1,width:'100%', alignItems:'flex-end'}}>

               <TextInput
                style={styles.TextField}
                keyboardType={'number-pad'}
                onChangeText={(text)=>onChangeInput(text, item)}
                value={item.input}
            />
            </View>
            </View>
            <View  style={{flexDirection:'row',marginVertical:'4%'}}>
            <View style={[styles.colorView,{width : 20,  backgroundColor : item.isSelected.color ,marginLeft:-20}]}/>
            {
                item.range.map(data=>(
            <View>
                    <View style={[styles.colorView,{ backgroundColor : data.color}]}/>
                    <Text style={{textAlign:'center',marginVertical:'2%'}}>{data.value}</Text>
                </View>
                ))
            }
            </View>
           
        </View>
        </View>
    )}

  return (
    <View style={styles.container}>
        <View style={styles.nextCont}>
            <TouchableOpacity style={styles.next}>
                <Text style={{color:'white',fontSize:15}}>Next</Text>
            </TouchableOpacity>
     </View>
     <Text style={{color:'blue', fontSize:30, fontWeight:'bold'}}>Test Strip</Text>
     <FlatList
        extraData={testStips}
        data={testStips}
        renderItem={renderItem}
       
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // width:'90%',
    paddingHorizontal:'3%'
  },
  headerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:0.5,
    borderColor:'gray',
    marginBottom:'5%',
    
  },
  profile:{
    height:40,
    width:40,
    borderRadius:20
  },
  header:{
    color:'black',
    fontWeight:'bold',
    fontSize:30,
    marginBottom:'2%'
  },
nextCont:{
    //  flex:1,
     alignItems:'flex-end',
   marginTop:'5%'
},
next:{
    height:30,
    width: 70,
    borderRadius:15,
    backgroundColor:'gray',
    justifyContent:'center',
    alignItems:'center'
},
selectionStripCont :{
    width:20,
    borderRightWidth:1,
    borderLeftWidth: 1,
    borderColor:'gray',
    // justifyContent:'center'
},
title:{
    fontSize:15,

},
colorView:{
    width:55,
    height :35,
    borderRadius :5,
    marginHorizontal:'1%'
},
TextField:{
    flex:1,
    color: 'black',
    fontSize: 12,
    letterSpacing: 1,
    borderWidth:1,
    // width:50,
    // height:20,
    textAlign:'center',
    // backgroundColor: 'red',
    borderRadius: 5,
    height : 40 , width: 80,
  },
 
})

export default TestStripScreen
