import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../Global/globalStyles';
import CustomTitle from './CustomTitle';
import {addTotal} from '../utils/helperFunctions';

const Total = ({data}) => {
  return (
    <View>
      <CustomTitle text="Total" />
      <Text style={styles.text}>{`$${addTotal(data)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    }
});

export default Total;
