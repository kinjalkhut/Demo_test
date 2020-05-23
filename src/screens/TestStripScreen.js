import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList,Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getVideos} from '../redux/homeReducer'
import { Images } from '../utils/Images'

function TestStripScreen({ navigation }) {
  const dispatch = useDispatch();
  const videosList = useSelector(state => state.homeReducer.videolist)

  useEffect(()=>{
  },[])

  return (
    <View style={styles.container}>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // width:'90%',
    paddingHorizontal:'5%'
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

 
})

export default TestStripScreen
