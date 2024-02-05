import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const clickOnButton = buttonTitle => {
    console.log('button presed', `${buttonTitle}`);
    if (buttonTitle === 'Button') {
      navigation.navigate('button');
    }
  };
  return (
    <Pressable
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
        marginVertical: 10,
      }}>
      <Text style={{fontSize: 25}}>Animation</Text>
      <Button title="Button" onPress={clickOnButton} />
    </Pressable>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
