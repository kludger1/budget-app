import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../Global/globalStyles'

const Header = ({text, style}) => {
  return (
    <>
      <View style={[styles.container, style && style]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Header;
