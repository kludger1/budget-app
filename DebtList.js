import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../Global/globalStyles';
import DebtItem from './DebtItem';

const DebtList = ({data, deleteDebt}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <DebtItem item={item} deleteDebt={deleteDebt}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default DebtList;
