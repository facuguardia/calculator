import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';

function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <CalculatorScreen />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
