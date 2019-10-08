import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {COLORS} from '../Global/globalStyles';

const CustomTitle = ({text, style}) => {
  return (
    <>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
      fontSize: 25,
    fontWeight: '600',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
});

export default CustomTitle;
