import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Pressable  } from 'react-native';
import {Card} from './components/Card';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Mainpage } from './screens/Mainpage';
import { Stats2 } from './screens/Stats2';
import { Trenovat } from './screens/Trenovat';
import { Prohlednout } from './screens/Prohlednout';
import { Popup } from './screens/Popup';
import { Finalpopup } from './screens/Finalpopup';
import { Words } from './screens/Words';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Mainpage} />
        <Stack.Screen name="Stats2" component={Stats2} />
        <Stack.Screen name="Trenovat" component={Trenovat} />
        <Stack.Screen name="Prohlednout" component={Prohlednout} />
        <Stack.Screen name="Popup" component={Popup} />
        <Stack.Screen name="Finalpopup" component={Finalpopup} />
        <Stack.Screen name="Wods" component={Words} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
  },
  text: {
    color: '#ebecee',
    fontSize: 40,
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'left',
    paddingLeft: 20
  }
});
