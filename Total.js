import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../Global/globalStyles';
import CustomTitle from './CustomTitle';
import {addTotal} from '../utils/helperFunctions';

const Total = ({data}) => {
  return (
    <View>
      <CustomTitle text="TOTAL:" />
      <Text>{`$${addTotal(data)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Total;
