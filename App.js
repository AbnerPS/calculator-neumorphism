import * as React from 'react'
import { createDrawerNavigator, DrawerView} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HistoryOperations from './src/components/HistoryOperations/HistoryOperations'
import Index from './src/index'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <HistoryOperations {...props} />}>
        <Drawer.Screen name="Home" component={Index} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}