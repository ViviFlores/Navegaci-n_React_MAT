import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigator } from './src/navigator/StackNavigator';
//import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { DrawerNavigatorPersonalizado } from './src/navigator/DrawerNavigatorPersonalizado';

const App = () => {
  return (
    <NavigationContainer>
      {/*<StackNavigator/>*/}
      {/* <DrawerNavigator/> */}
      <DrawerNavigatorPersonalizado/>
    </NavigationContainer>
  )
}

export default App;
