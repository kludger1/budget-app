import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../Global/globalStyles';
import CustomTitle from './CustomTitle';
import DebtList from './DebtList';
import Total from './Total';

const DebtContainer = ({debtList, deleteDebt}) => {


  return (
    <View>
      <CustomTitle text="Debt" />
      <DebtList data={debtList} deleteDebt={deleteDebt} />
      <Total data={debtList} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DebtContainer;
