// import remove from 'lodash.remove'
import { useSelector, useDispatch } from 'react-redux'
var parseString = require('react-native-xml2js').parseString;
var xml2js = require('react-native-xml2js');
// const dispatch = useDispatch()
// Action Types
export const GET_VIDEOS = 'GET_VIDEOS'


// Action Creators

export function videosList(videolist) {
  return {
    type: GET_VIDEOS,
    videolist
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




// reducer

const initialState = {
    videolist: []
}
function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videolist : action.videolist
      }

    default:
      return state
  }
}

export default homeReducer
