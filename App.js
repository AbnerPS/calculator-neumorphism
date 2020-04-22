import React from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { NeomorphBox, ShadowBox } from 'react-native-neomorph-shadows'
// import { NeuButton } from 'react-native-neu-element'
import {LinearGradient, LinearGradientProps} from 'react-native-linear-gradient'
import svg from 'react-native-svg'
import styles from './styles'

export default function App() {
  
  const handleClick = (e) => {
    e.preventDefault()
    Alert.alert('Click', 'Evento de click no componente')
  }

  const handleMenu = (e) => {
    e.preventDefault()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <NeomorphBox style={styles.neuMenu}>
            <NeomorphBox inner style={styles.borderButtonMenu}>
            <NeomorphBox style={styles.neuButtonMenu}>
              <TouchableOpacity onPress={handleClick}>
                <Feather name="menu" size={28} />
              </TouchableOpacity>
            </NeomorphBox>
            </NeomorphBox>
            <Text style={styles.title}>Calculadora Moderna</Text>
          </NeomorphBox>
      </View>
      
      
      <View style={styles.operation}>
        <View style={styles.operating}>
          <Text style={styles.operatingText}>400+100</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>500</Text>
        </View>
      </View>
      <View style={styles.buttons}>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonFunc}>
            <Text style={styles.FuncText}>AC</Text>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonFunc}>
            <Text style={styles.FuncText}>+/-</Text>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonFunc}>
            <Text style={styles.FuncText}>%</Text>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonFunc}>
            <Text style={styles.FuncText}>/</Text>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <Text style={styles.numberText}>7</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <Text style={styles.numberText}>8</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <Text style={styles.numberText}>9</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <Text style={styles.numberText}>*</Text>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <Text style={styles.numberText}>4</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <Text style={styles.numberText}>5</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <Text style={styles.numberText}>6</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <Text style={styles.numberText}>-</Text>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <Text style={styles.numberText}>1</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <Text style={styles.numberText}>2</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <Text style={styles.numberText}>3</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <Text style={styles.numberText}>+</Text>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumberZero}>
          <Text style={styles.numberText}>0</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <Text style={styles.numberText}>.</Text>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <Text style={styles.numberText}>=</Text>
          </NeomorphBox>
        </NeomorphBox>

      </View>
    </View>
  )
}