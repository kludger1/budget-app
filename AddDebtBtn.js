import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {COLORS} from '../Global/globalStyles';
import {Paper} from './styleComponents';

const AddDebtBtn = ({addDebt}) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [debtName, setDebtName] = useState('');
  const [debtAmount, setDebtAmount] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const handleAdd = () => {
    const debt = {
      id: Math.random().toString(),
      name: debtName,
      amountDue: Number(debtAmount),
      monthlyPayment: monthlyPayment ? Number(monthlyPayment) : '',
    };
    console.log('from handle add',debt);
    addDebt(debt);
    setToggleBtn(false);
  };

  if (toggleBtn) {
    return (
      <Paper>
        <TextInput
          onChangeText={text => {
            setDebtName(text);
          }}
          autoFocus={true}
          keyboardShouldPersistTaps="handled"
          style={styles.input}
          placeholder="Debt Name"
          value={debtName}
        />
        <TextInput
          onChangeText={num => {
            setDebtAmount(num);
          }}
          autoFocus={true}
          keyboardShouldPersistTaps="handled"
          style={styles.input}
          placeholder="Debt Amount"
          keyboardType="numeric"
          value={debtAmount}
        />
        <TextInput
          onChangeText={num => {
            setMonthlyPayment(num);
          }}
          autoFocus={true}
          keyboardShouldPersistTaps="handled"
          style={styles.input}
          placeholder="Monthly Payment"
          keyboardType="numeric"
          value={monthlyPayment}
        />
        <TouchableOpacity style={styles.container} onPress={handleAdd}>
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.container, styles.cancel]}
          onPress={() => setToggleBtn(false)}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </Paper>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setToggleBtn(true)}>
      <Text style={styles.text}>Add Debt +</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondaryColor,
    marginTop: 20,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
  input: {
    padding: 10,
    fontSize: 15,
    width: '100%',
  },
  cancel: {
    backgroundColor: '#CF3F3F',
  },
});

export default AddDebtBtn;
