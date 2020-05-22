import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'



const primaryNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal'
  }
)

export default primaryNavigator
