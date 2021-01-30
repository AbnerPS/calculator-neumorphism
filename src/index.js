import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { NeomorphBox } from 'react-native-neomorph-shadows'
import { Feather } from '@expo/vector-icons'
import { updateHistory } from './components/HistoryOperations/HistoryOperations'
import styles from './styles'

export default function index({ navigation }) {
  const [mathOperation, setMathOperation] = useState('')
  const [resultCalc, setResultCalc] = useState(0)
  const [history, setHistory] = useState([])

  function handleCalculateResult() {
    if(mathOperation.length > 0) {
      const result = eval(mathOperation)
      setResultCalc(result)
      setHistory([...history, {
        operation: mathOperation,
        result: result
      }])

      setMathOperation('')
    }
  }

  function handleClean() {
    setMathOperation('')
    setResultCalc(0)
  }

  function handleDelete() {
    setMathOperation(mathOperation.replace(/.$/, ''))
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
          <NeomorphBox style={styles.neuMenu}>
            <NeomorphBox inner style={styles.borderButtonMenu}>
            <NeomorphBox style={styles.neuButtonMenu}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Feather name="menu" size={28} />
              </TouchableOpacity>
            </NeomorphBox>
            </NeomorphBox>
            <Text style={styles.title}>Calculadora Neumorphism</Text>
          </NeomorphBox>
      </View>
      
      <View style={styles.operation}>
        <View style={styles.operating}>
          <Text style={styles.operatingText}>{ mathOperation }</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>{ resultCalc }</Text>
        </View>
      </View>
      <View style={styles.buttons}>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonFunc}>
            <TouchableOpacity onPress={ handleClean }>
              <Text style={styles.FuncText}>C</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonFunc}>
            <TouchableOpacity onPress={ handleDelete }>
                <Feather name="delete"color="#FFF" size={28}/>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonFunc}>
            <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '%') }>
              <Text style={styles.FuncText}>%</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '/') }>
              <Text style={styles.numberText}>/</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '7') }>
            <Text style={styles.numberText}>7</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '8') }>
            <Text style={styles.numberText}>8</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '9') }>
            <Text style={styles.numberText}>9</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '*') }>
              <Text style={styles.numberText}>*</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '4') }>
            <Text style={styles.numberText}>4</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '5') }>
            <Text style={styles.numberText}>5</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '6') }>
            <Text style={styles.numberText}>6</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '-') }>
              <Text style={styles.numberText}>-</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '1') }>
            <Text style={styles.numberText}>1</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '2') }>
            <Text style={styles.numberText}>2</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '3') }>
            <Text style={styles.numberText}>3</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '+') }>
              <Text style={styles.numberText}>+</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumberZero}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '0') }>
            <Text style={styles.numberText}>0</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.buttonNumber}>
          <TouchableOpacity onPress={ () => setMathOperation(mathOperation + '.') }>
            <Text style={styles.DotText}>.</Text>
          </TouchableOpacity>
        </NeomorphBox>

        <NeomorphBox style={styles.borderButtonOp}>
          <NeomorphBox inner style={styles.neuButtonOp}>
            <TouchableOpacity onPress={ handleCalculateResult }>
              <Text style={styles.numberText}>=</Text>
            </TouchableOpacity>
          </NeomorphBox>
        </NeomorphBox>

      </View>
    </View>
  )
}