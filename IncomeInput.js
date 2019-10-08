import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../Global/globalStyles';

const IncomeInput = ({style}) => {
  const [value, setValue] = useState(0);
  const [edit, setEdit] = useState(false);

  const onChangeInput = num => {
    setValue(num);
  };

  if (edit) {
    return (
      <View>
        <Text>$</Text>
        <TextInput
          onBlur={() => setEdit(false)}
          onChangeText={incomeNum => {
            setValue(incomeNum);
          }}
          autoFocus={true}
          keyboardShouldPersistTaps="handled"
          style={styles.input}
          placeholder="Input Monthly Income"
          keyboardType="numeric"
          value={value}
        />
      </View>
    );
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setEdit(true);
        }}>
        <Text>${value ? value : 0}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 30,
    width: '100%',
  },
  inputActive: {
    backgroundColor: '#EDEDED',
  },
});

export default IncomeInput;
