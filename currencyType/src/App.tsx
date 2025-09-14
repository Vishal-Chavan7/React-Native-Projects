import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// Constants
import { currencyByRupee } from './constants';
// Component
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#FF6B6B",
        textColor: "#FFFFFF",
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#FFD93D",
        textColor: "#000000",
      });
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode="always"
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder="Enter amount in Rupees"
              placeholderTextColor="#AAAAAA"
              style={styles.inputAmountField}
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>{resultValue}</Text>
          )}
        </View>

        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#1E1E2F', 
    fontWeight: '700',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#1E1E2F',
    fontWeight: '700',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 220,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F5F5F5', 
    borderColor: '#CCCCCC',
    color: '#1E1E2F',
  },
  bottomContainer: {
    flex: 3,
    paddingHorizontal: 8,
    paddingTop: 12,
  },
  button: {
    flex: 1,
    margin: 8,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#E0E0E0', 
    elevation: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#69efe8ff',
  },
});

export default App;
