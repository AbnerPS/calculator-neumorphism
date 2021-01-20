import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerView} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerMenu from './src/components/DrawerMenu'
import Index from './src/index'

export default function App() {
  return (
    <Index/>
  )
}