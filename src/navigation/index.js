import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import primaryNavigator from './primaryNavigator'
import authNavigator from './authNavigator'

const StackNavigator = createSwitchNavigator(
  {
    primaryStack: {screen: primaryNavigator},
    authStack :{screen: authNavigator }

  },
  {
    initialRouteName: 'primaryStack',
    headerMode: 'none',
    mode: 'modal'
  }
)

export default createAppContainer(StackNavigator)
