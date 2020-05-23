import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList,Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getVideos} from '../redux/homeReducer'
import { Images } from '../utils/Images'
import Video from 'react-native-video';

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const videosList = useSelector(state => state.homeReducer.videolist)

  useEffect(()=>{
    dispatch(getVideos())
  },[])

  useEffect(()=>{
    console.warn("1",videosList)
  },[videosList])

  function  renderItem({item, index}){
// console.warn("2",item)
    return(
    <View style={{}}>
      
      <Video source={{uri:`https://commondatastorage.googleapis.com/gtv-videos-bucket/${item}`}}   // Can be a URL or a local file.
      //  ref={(ref) => {
      //    this.player = ref
      //  }}            
       style={styles.videoContainer}   
       controls={true}           
       paused={true}            // Store reference
       />
       <View style={styles.videoInfoCont}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'blue'}} >New</Text>
            <Text style={{color:'gray'}} >1hr ago</Text>
          </View>
          <Text style={{fontSize:20, fontWeight:'bold'}} >Instagram</Text>
          <Text style={{color:'gray'}} >Abc</Text>
       </View>
    </View>
)}

  return (
    <View style={styles.container}>
      <View style={{marginTop: '5%'}}>
        <Text>Today</Text>
        <View style={styles.headerContainer}>
       <Text style={styles.header}>My Feed</Text>
       <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <Image source={Images.logo} style={styles.profile}/>
        </TouchableOpacity>
        </View>
      </View>
      <FlatList
        extraData={videosList}
        data={videosList}
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
  videoContainer:{
    height:200,
    width:'100%',
    // borderRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:'white',

  },
  videoInfoCont:{
    height:100,
    width:'100%',
    backgroundColor:'white',
    borderRadius:20,
    elevation:5,
    bottom:'4%',
    paddingHorizontal:'4%',
    justifyContent:'center'
  }
 
})

export default HomeScreen
