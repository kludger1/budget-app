import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../Global/globalStyles';
import CustomTitle from './CustomTitle';
import DebtList from './DebtList';
import Total from './Total';

const DebtContainer = ({item}) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'car',
      amountDue: 500,
      monthlyPayment: 50,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'house',
      amountDue: 6000,
      monthlyPayment: 500,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'phone',
      amountDue: 50,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d23',
      name: 'laptop',
      amountDue: 610,
    },
  ];

  const [data, setData] = useState(DATA);

  const deleteDebt = id => {
    const newData = [];
    data.map(item => item.id !== id && newData.push(item));
    setData(newData);
  };

  return (
    <View>
      <CustomTitle text="Debt" />
      <DebtList data={data} deleteDebt={deleteDebt} />
      <Total data={data} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DebtContainer;
