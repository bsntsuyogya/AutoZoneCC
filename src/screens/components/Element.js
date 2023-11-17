import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Element = ({onPress, value}) => {
  return (
    <TouchableOpacity onPress={() => onPress(value)}>
      <View style={styles.viewContainer}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Element;

const styles = StyleSheet.create({
  viewContainer: {
    padding: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    opacity: 0.6,
  },
});
