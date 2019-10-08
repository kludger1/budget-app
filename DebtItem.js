import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../Global/globalStyles';

const DebtItem = ({item, deleteDebt}) => {
  return (
    <TouchableOpacity onPress={() => deleteDebt(item.id)}>
      <Text>{item.name}</Text>
      <Text>{`$${item.amountDue} ${
        item.monthlyPayment ? `/ mp: $${item.monthlyPayment}` : ''
      }`}</Text>
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({});

export default DebtItem;

