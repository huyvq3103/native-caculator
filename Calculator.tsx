import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Calculartor = () => {
  const [input, setInput] = useState('0');
  const handleInput = (value: string) => {
    if (value === 'C') {
      setInput('0');
    } else {
      setInput(input === '0' ? value : input + value);
    }
  };
  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(Number.isFinite(result) ? result.toString() : 'Error');
    } catch (error) {
      setInput('Error');
    }
  };
  const layout = [
    [
      {inputValue: '7', style: styles.button, handle: handleInput},
      {inputValue: '8', style: styles.button, handle: handleInput},
      {inputValue: '9', style: styles.button, handle: handleInput},
      {inputValue: '/', style: styles.operatorButton, handle: handleInput},
    ],
    [
      {inputValue: '4', style: styles.button, handle: handleInput},
      {inputValue: '5', style: styles.button, handle: handleInput},
      {inputValue: '6', style: styles.button, handle: handleInput},
      {inputValue: '*', style: styles.operatorButton, handle: handleInput},
    ],
    [
      {inputValue: '1', style: styles.button, handle: handleInput},
      {inputValue: '2', style: styles.button, handle: handleInput},
      {inputValue: '3', style: styles.button, handle: handleInput},
      {inputValue: '-', style: styles.operatorButton, handle: handleInput},
    ],
    [
      {inputValue: '0', style: styles.button, handle: handleInput},
      {inputValue: '.', style: styles.button, handle: handleInput},
      {inputValue: 'C', style: styles.button, handle: handleInput},
      {inputValue: '+', style: styles.operatorButton, handle: handleInput},
    ],
    [
      {
        inputValue: '=',
        styles: styles.calculateButton,
        handle: handleCalculate,
      },
    ],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline={false} style={styles.input} editable={false}>
          {input}
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
        {layout.map(rows => (
          <View style={styles.row}>
            {rows.map(row => (
              <TouchableOpacity
                key={row.inputValue}
                style={row.style}
                onPress={() => row.handle(row.inputValue)}>
                <Text style={styles.buttonText}>{row.inputValue}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#505050',
    flex: 1,
    padding: 16,
    borderRadius: 38,
    margin: 6,
  },
  inputContainer: {
    height: 160,
    justifyContent: 'flex-end',
  },
  input: {
    fontSize: 48,
    color: '#fff',
    textAlign: 'right',
  },
  container: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
  },
  calculateButton: {
    backgroundColor: '#FF9500',
    borderRadius: 38,
    padding: 16,
    // width: '100%',
  },
  operatorButton: {
    backgroundColor: '#FF9500',
    flex: 1,
    padding: 16,
    borderRadius: 38,
    margin: 6,
  },
});

export default Calculartor;
