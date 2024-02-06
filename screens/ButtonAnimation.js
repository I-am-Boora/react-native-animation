import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  createAnimatedComponent,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
const ButtonAnimation = () => {
  const [isLike, setIsLike] = useState(false);
  const scaleLike = useSharedValue(1);

  const handleLikeButton = () => {
    setIsLike(!isLike);
    scaleLike.value = withRepeat(withTiming(2), 2, true);
  };
  const likeButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleLike.value}],
    };
  });
  const AnimatedPressable = Animated.createAnimatedComponent(Icon);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      {isLike ? (
        <AnimatedPressable
          name="heart"
          size={100}
          color={'red'}
          onPress={handleLikeButton}
          style={likeButtonStyle}
        />
      ) : (
        <AnimatedPressable
          name="heart-outline"
          size={100}
          color={'red'}
          onPress={handleLikeButton}
          style={likeButtonStyle}
        />
      )}
    </View>
  );
};

export default ButtonAnimation;

const styles = StyleSheet.create({});
