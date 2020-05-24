// import remove from 'lodash.remove'
import { useSelector, useDispatch } from 'react-redux'
import { act } from 'react-test-renderer'
import { manager} from '../utils/services'

// const dispatch = useDispatch()
// Action Types
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const EDIT_PROFILE = 'EDIT_PROFILE'


// Action Creators

export function login(isLoggedIn, userDetails, isSocialLogin) {
  return {
    type: LOGIN,
    isLoggedIn,
    userDetails,
    isSocialLogin
  }
}

export function logout() {
  return {
    type: LOGOUT
   
  }
}



export function EditProfile( userDetails) {
  return {
    type: EDIT_PROFILE,
     userDetails
  }
}

  export const onLogin = (user, isSocialLogin) => {
    return dispatch =>{
       let isLoggedIn;
       let userDetails={};
       if(isSocialLogin){
        dispatch(login(true,userDetails, isSocialLogin))
       }else{
        if(user.Email== 'admin@gmail.com' && user.Password == 'Simform.123'){

          userDetails={
            username : 'admin',
            email : 'admin@gmail.com',
            phoneNumber : 9999999999
          }
          isLoggedIn = true
        }else{
          isLoggedIn=false
        }
        dispatch(login(isLoggedIn,userDetails, isSocialLogin))
       }
      
   
    
    }
 
}

export const onLogout = ( isSocialLogin) =>{
  return dispatch=>{
    if(isSocialLogin){
      manager.deauthorize('github')
      .then(resp=>console.warn("55", resp))
    }
    dispatch(logout())
  }
}


// reducer

const initialState = {
  isLoggedIn: false,
  userDetails:{},
  isSocialLogin : false
}
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn : action.isLoggedIn,
        userDetails: action.userDetails,
        isSocialLogin :action.isSocialLogin
      }
      case LOGOUT:
        return initialState

      case EDIT_PROFILE:
      return {
        ...state,
        userDetails: action.userDetails
      }

    default:
      return state
  }
}

export default loginReducer
