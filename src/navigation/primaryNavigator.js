import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TestStripScreen from '../screens/TestStripScreen'


const Home = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal'
  }
)

const primaryNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    TestStrip: {
      screen: TestStripScreen
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal'
  }
)

export default primaryNavigator
