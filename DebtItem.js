import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../Global/globalStyles';

const DebtItem = ({item, deleteDebt}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => deleteDebt(item.id)}>
      <Text style={styles.text}>
        {`${item.name}`}
        {`$${item.amountDue} ${
          item.monthlyPayment ? `/ mp: $${item.monthlyPayment}` : ''
        }`}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 8,
    backgroundColor: '#F9EAEA',
    borderRadius: 5,
  },
  text: {
    fontSize: 17,
  },
});

export default DebtItem;
