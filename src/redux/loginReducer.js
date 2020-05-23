// import remove from 'lodash.remove'
import { useSelector, useDispatch } from 'react-redux'
import { act } from 'react-test-renderer'
// const dispatch = useDispatch()
// Action Types
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const EDIT_PROFILE = 'EDIT_PROFILE'


// Action Creators

export function login(isLoggedIn, userDetails) {
  return {
    type: LOGIN,
    isLoggedIn,
    userDetails
  }
}

export function logout() {
  return {
    type: LOGOUT,
   
  }
}



export function EditProfile( userDetails) {
  return {
    type: EDIT_PROFILE,
     userDetails
  }
}

  export const onLogin = user => {
    return dispatch =>{
      console.warn("00")
      let isLoggedIn;
      let userDetails={};
    if(user.Email== 'admin@gmail.com' && user.Password == 'Simform.123'){
      console.warn("01")
      userDetails={
        username : 'admin',
        email : 'admin@gmail.com',
        phoneNumber : 9999999999
      }
      isLoggedIn = true
    }else{
      isLoggedIn=false
    }
    dispatch(login(isLoggedIn,userDetails))
    }
 
}




// reducer

const initialState = {
  isLoggedIn: false,
  userDetails:{}
}
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn : action.isLoggedIn,
        userDetails: action.userDetails
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
