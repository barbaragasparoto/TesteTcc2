import Login from './src/componentes/Login';
import Home from './src/componentes/Home/index';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen 
      name="Login" 
      component={Login} 
      options={{ title: '' }}
      />

      <Stack.Screen
      name="Home" 
      component={Home} 
      />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;
