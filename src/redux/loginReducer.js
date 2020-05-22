// import remove from 'lodash.remove'
import { SERVER_URL } from "../constants/constants";
import { Contact } from "../schema/schemas";
import { useSelector, useDispatch } from 'react-redux'
// const dispatch = useDispatch()
// Action Types
export const LOGIN = 'LOGIN'

const databasOptions={
  path:'contact.realm',
  schema:[Contact],
  schemaVersion:0
}
// Action Creators

export function login(isLoggedIn) {
  return {
    type: LOGIN,
    isLoggedIn
  }
}

  export const onLogin = user => {
    return dispatch =>{
      console.warn("00")
      let isLoggedIn;
    if(user.Email== 'admin@gmail.com' && user.Password == 'Simform.123'){
      console.warn("01")

      isLoggedIn = true
    }else{
      isLoggedIn=false
    }
    dispatch(login(isLoggedIn))
    }
 
}




// reducer

const initialState = {
  isLoggedIn: false
}
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn : action.isLoggedIn
      }

    default:
      return state
  }
}

export default loginReducer
