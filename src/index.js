import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { NeomorphBox } from 'react-native-neomorph-shadows'
import { Feather } from '@expo/vector-icons'
import DrawerMenu from './components/DrawerMenu'
import styles from './styles'

export default function index() {
  const [numberOne, setNumberOne] = useState(false)
  const [numberTwo, setNumberTwo] = useState(false)
  const [operator, setOperator] = useState(false)
  const [resultCalc, setResultCalc] = useState(0)
  const [showDisplay, setShowDisplay] = useState('')


  function handleNumberButton(buttonPressed) {
    if(operator) {
      setNumberTwo(numberTwo ? `${numberTwo}${buttonPressed}` : `${buttonPressed}`)
    } else {
      setNumberOne(numberOne ? `${numberOne}${buttonPressed}` : `${buttonPressed}`)
    }
  }

  function handleOperationButton(buttonPressed) {
    if(numberOne && operator && numberTwo) {
      switch (buttonPressed) {
        case '+':
          setResultCalc(parseFloat(numberOne) + parseFloat(numberTwo))
          setNumberOne(parseFloat(numberOne) + parseFloat(numberTwo))
        break;
  
        case '-':
          setResultCalc(parseFloat(numberOne) - parseFloat(numberTwo))
          setNumberOne(parseFloat(numberOne) - parseFloat(numberTwo))
        break;
  
        case '*':
          setResultCalc(parseFloat(numberOne) * parseFloat(numberTwo))
          setNumberOne(parseFloat(numberOne) * parseFloat(numberTwo))
        break;
  
        case '/':
          setResultCalc(parseFloat(numberOne) / parseFloat(numberTwo))
          setNumberOne(parseFloat(numberOne) / parseFloat(numberTwo))
        break;
      }

      setNumberTwo(false)
      setOperator(buttonPressed)
    }

    if(numberOne) {
      setOperator(buttonPressed)
    }

    
  }

  function calculateResult() {
    if((numberOne && !numberTwo) || (numberOne && !operator)) {
      setResultCalc(parseFloat(numberOne))
      setNumberOne(false)
      setNumberTwo(false)
      setOperator(false)
    }
    
    if(numberOne && operator && numberTwo) {
      setResultCalc(parseFloat(numberOne) + parseFloat(numberTwo))
      setNumberOne(false)
      setNumberTwo(false)
      setOperator(false)
    }
  }

  useEffect(() => {
    let show = ''

    if(numberOne) {
      show += numberOne
    }

    if(operator) {
      show += operator
    }

    if(numberTwo) {
      show += numberTwo
    }

    setShowDisplay(show.length > 0 ? show : '0')
  }, [numberOne, operator, numberTwo])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <NeomorphBox style={styles.neuMenu}>
            <NeomorphBox inner style={styles.borderButtonMenu}>
            <NeomorphBox style={styles.neuButtonMenu}>
              <TouchableOpacity onPress={() => {}}>
                <Feather name="menu" size={28} />
              </TouchableOpacity>
            </NeomorphBox>
            </NeomorphBox>
            <Text style={styles.title}>Calculadora Moderna</Text>
          </NeomorphBox>
      </View>
      
      
      <View style={styles.operation}>
        <View style={styles.operating}>
          <Text style={styles.operatingText}>{ showDisplay }</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>{ resultCalc }</Text>
        </View>
      </View>
      <View style={styles.buttons}>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonFunc}>
            <TouchableOpacity onPress={ () => handleOperationButton("AC") }>
              <Text style={styles.FuncText}>AC</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonFunc}>
            <TouchableOpacity onPress={ () => handleOperationButton("+/-") }>
              <Text style={styles.FuncText}>+/-</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonFunc}>
            <TouchableOpacity onPress={ () => handleOperationButton("%") }>
              <Text style={styles.FuncText}>%</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <TouchableOpacity onPress={ () => handleOperationButton("/") }>
              <Text style={styles.numberText}>/</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => handleNumberButton(7) }>
            <Text style={styles.numberText}>7</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => handleNumberButton(8) }>
            <Text style={styles.numberText}>8</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => handleNumberButton(9) }>
            <Text style={styles.numberText}>9</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <TouchableOpacity onPress={ () => handleOperationButton("*") }>
              <Text style={styles.numberText}>*</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => handleNumberButton(4) }>
            <Text style={styles.numberText}>4</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => handleNumberButton(5) }>
            <Text style={styles.numberText}>5</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => handleNumberButton(6) }>
            <Text style={styles.numberText}>6</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <TouchableOpacity onPress={ () => handleOperationButton("-") }>
              <Text style={styles.numberText}>-</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => handleNumberButton(1) }>
            <Text style={styles.numberText}>1</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => handleNumberButton(2) }>
            <Text style={styles.numberText}>2</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => handleNumberButton(3) }>
            <Text style={styles.numberText}>3</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <TouchableOpacity onPress={ () => handleOperationButton("+") }>
              <Text style={styles.numberText}>+</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumberZero}>
          <TouchableOpacity onPress={ () => handleNumberButton(0) }>
            <Text style={styles.numberText}>0</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => handleNumberButton(".") }>
            <Text style={styles.numberText}>.</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <TouchableOpacity onPress={ () => calculateResult("=") }>
              <Text style={styles.numberText}>=</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

      </View>
    </View>
  )
}