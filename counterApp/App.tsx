import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  let [counter, setCounter] = useState(0);
  let [display, setDisplay] = useState('vishal')

  const increment = () => {
    if(counter >= 20){
      setDisplay("value cannot be increment after 20")
    }else{
    setCounter(counter += 1)
    setDisplay("")
    }
    
  };

  const decrement = () => {
    if(counter>0){
    setCounter(counter -=  1)
    
    }
  else{
    setDisplay("value cannot exceed zero ")
    setCounter(counter =0)
  }
  };

  const reset = () => {
    setCounter(counter = 0)
    setDisplay("")
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#f1c40f', flex: 1 }}>
      <Text style={styles.headingText}>Counter App</Text>
      <View style={styles.container}>
        <Text style={styles.displayText}>{counter}</Text>
        <View style={styles.miniContainer}>
          <TouchableOpacity  onPress={increment}style={styles.buttons}>
            <Text style={styles.Text}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={reset} style={styles.buttons}>
            <Text style={styles.Text}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={decrement} style={styles.buttons}>
            <Text style={styles.Text}>Decrement</Text>
          </TouchableOpacity>
        </View>
          <Text style={styles.error}>{display}</Text>

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headingText: {
    marginTop: 50,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif',
    color: '#e84118',
  },
  displayText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  container: {
    marginVertical: 150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f1c40f'
  },
  miniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: 200,
    // backgroundColor: '#ffffff',
    marginVertical: 20,
  },
  buttons: {
    alignItems: 'center',
    backgroundColor: '#00a8ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  error:{
    marginVertical: 20,
    fontSize: 18,
    color: '#000000',
    fontWeight : "bold"
  }
});

export default App;
