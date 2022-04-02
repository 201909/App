import * as React from 'react';
import { View } from 'react-native';
import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  ScreenOne: ScreenOne,
  ScreenTwo : ScreenTwo
})

const AppContainer = createAppContainer(AppNavigator)
