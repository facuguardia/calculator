import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';
import useCalculator from '../hooks/useCalculator';

export default function CalculatorScreen() {
  const {
    previousNumber,
    number,
    clean,
    assembleNumber,
    positve,
    buttonDel,
    buttonDivide,
    buttonMultiply,
    buttonSubstract,
    buttonAdd,
    calculate,
  } = useCalculator();

  return (
    <View>
      {previousNumber !== '0' && (
        <Text style={styles.previousResult}>{previousNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.buttonContainer}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positve} />
        <ButtonCalc text="del" color="#9B9B9B" action={buttonDel} />
        <ButtonCalc text="/" color="#fea00a" action={buttonDivide} />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonCalc text="7" action={assembleNumber} />
        <ButtonCalc text="8" action={assembleNumber} />
        <ButtonCalc text="9" action={assembleNumber} />
        <ButtonCalc text="X" color="#fea00a" action={buttonMultiply} />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonCalc text="4" action={assembleNumber} />
        <ButtonCalc text="5" action={assembleNumber} />
        <ButtonCalc text="6" action={assembleNumber} />
        <ButtonCalc text="-" color="#fea00a" action={buttonSubstract} />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonCalc text="1" action={assembleNumber} />
        <ButtonCalc text="2" action={assembleNumber} />
        <ButtonCalc text="3" action={assembleNumber} />
        <ButtonCalc text="+" color="#fea00a" action={buttonAdd} />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonCalc text="0" wideButton action={assembleNumber} />
        <ButtonCalc text="." action={assembleNumber} />
        <ButtonCalc text="=" color="#fea00a" action={calculate} />
      </View>
    </View>
  );
}
