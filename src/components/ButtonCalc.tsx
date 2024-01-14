import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: string;
  wideButton?: boolean;
  action: (numberText: string) => void;
}

export default function ButtonCalc({
  text,
  color = '#333333',
  wideButton = false,
  action,
}: Props) {
  return (
    <TouchableOpacity onPress={()=>action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: wideButton ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '500',
  },
});
