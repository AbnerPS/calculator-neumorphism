import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerView} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Index from '../index'


function MeuMenu(){
  return (
    <View>
      <Text>Ola mundo doido</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <MeuMenu/>}>
        <Drawer.Screen name="Index" component={ Index } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}