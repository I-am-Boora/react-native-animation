import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const ButtonAnimation = () => {
  const scale = useSharedValue(0);
  const handleAnimation = () => {
    scale.value = withSpring(scale.value == 0 ? 1 : 0);
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 100,
            backgroundColor: 'black',
            marginTop: 20,
          },
          animatedStyle,
        ]}></Animated.View>
      <Pressable
        onPress={handleAnimation}
        style={{
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
          height: 44,
          width: '40%',
          borderRadius: 20,
          marginTop: 200,
        }}>
        <Text style={{fontSize: 18}}>Ok</Text>
      </Pressable>
    </View>
  );
};

export default ButtonAnimation;

const styles = StyleSheet.create({});
