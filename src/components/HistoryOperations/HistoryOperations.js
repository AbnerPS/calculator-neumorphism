import React, { useState } from 'react'
import { View, Text,  ScrollView, FlatList} from 'react-native';
import { NeomorphBox } from 'react-native-neomorph-shadows'
import { Feather } from '@expo/vector-icons'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import styles from './styles'

export default function HistoryOperations() {
  const [history, setHistory] = useState([])

  const testArray = [
    {
      operation: "500+1",
      result: "1"
    },{
      operation: "500+2",
      result: "2"
    },{
      operation: "500+3",
      result: "3"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },{
      operation: "500+4",
      result: "4"
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}><Feather name="plus-square" size={20} /> HISTÓRICO</Text>
      </View>

      <FlatList data={ testArray } renderItem={({ item }) => (
        <View style={styles.content}>
          <Text style={styles.operation}>{item.operation}</Text>
          <Text style={styles.result}>{item.result}</Text>
        </View>
      )}/>

    </View>
  );
}