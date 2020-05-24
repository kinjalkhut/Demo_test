// import remove from 'lodash.remove'
import { useSelector, useDispatch } from 'react-redux'
var parseString = require('react-native-xml2js').parseString;
var xml2js = require('react-native-xml2js');
// const dispatch = useDispatch()
// Action Types
export const GET_VIDEOS = 'GET_VIDEOS'
export const GET_TESTSTRIPS = 'GET_TESTSTRIPS'

// Action Creators

export function videosList(videolist) {
  return {
    type: GET_VIDEOS,
    videolist
  }
}


export function testStripsList(testStripList) {
  return {
    type: GET_TESTSTRIPS,
    testStripList
  }
}

  export const getVideos = user => {
    return dispatch =>{
        try{
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
    
      if (request.status === 200) {
    
        parseString(request.responseText, function (err, result) {
            var list =[];
            result.ListBucketResult.Contents.map((data, i)=>{
                if(data.Key[0].includes('.mp4') && i<10)
                list.push(data.Key[0])
            })
            console.warn("lst",list)
            dispatch(videosList(list))
        });
      } else {
        console.warn('error');
      }
    };
    
    request.open('GET', 'https://commondatastorage.googleapis.com/gtv-videos-bucket');
    request.send();
  
 }catch(e){

 }   }
 
}

export const gettestStrips = user => {
  return dispatch =>{
    const list=[{
      id: 0,
      title : 'Total Hardness',
      range :[{
        color:'#455b85',
        value : 0
      },
      {
        color:'#7090cc',
        value : 110
      },
      {
        color:'#1748a3',
        value : 250
      },
      {
        color:'#1748a3',
        value : 500
      },
      {
        color:'#630f6e',
        value : 1000
      }],
      isSelected :{
        color:'#455b85',
        value : 0
      },
      input : 0
    },
    {
      id:1,
      title : 'Total Chlorine',
      range :[{
        color:'#d6c50d',
        value : 0
      },
      {
        color:'#f5ec47',
        value : 1
      },
      {
        color:'#827c0d',
        value : 3
      },
      {
        color:'#4d820d',
        value : 5
      },
      {
        color:'#46e363',
        value : 10
      }],
      isSelected :{
        color:'#d6c50d',
        value : 0
      },
      input : 0
    },
    {
      id:2,
      title : 'Total Hardness',
      range :[{
        color:'#f0de6e',
        value : 0
      },
      {
        color:'#c6a4ed',
        value : 1
      },
      {
        color:'#ab76e8',
        value : 3
      },
      {
        color:'#8134d9',
        value : 5
      },
      {
        color:'#6406cf',
        value : 1
      }],
      isSelected :{
        color:'#f0de6e',
        value : 0
      },
      input : 0
    }]
    dispatch(testStripsList(list))
  }

}




// reducer

const initialState = {
    videolist: [],
    testStripList :[]
}
function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videolist : action.videolist
      }

      case GET_TESTSTRIPS:
      return {
        ...state,
        testStripList : action.testStripList
      }

    default:
      return state
  }
}

export default homeReducer
