import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen'



const authNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    mode: 'modal'
  }
)

export default authNavigator
