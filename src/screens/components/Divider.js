import React from 'react';
import {StyleSheet, View} from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    backgroundColor: 'red',
    height: 1,
    width: '100%',
    borderTopWidth: 1,
    borderColor: 'grey',
    opacity: 0.1,
  },
});
