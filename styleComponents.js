import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../Global/globalStyles';

export const Paper = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 5,
    marginHorizontal: 10,
      borderRadius: 5,
  },
});
