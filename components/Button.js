import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const Button = ({title, onPress}) => {
  return (
    <Pressable
      onPress={() => onPress(title)}
      style={{
        backgroundColor: 'grey',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 8,
      }}>
      <Text style={{fontSize: 18, fontWeight: '500'}}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
