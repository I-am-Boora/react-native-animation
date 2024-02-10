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
import {opacity} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const ButtonAnimation = () => {
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(10);
  const scaleLike = useSharedValue(1);
  const translateX = useSharedValue(0);
  const textOpacity = useSharedValue(1);

  const handleLikeButton = () => {
    setIsLike(!isLike);

    scaleLike.value = withTiming(1.3);
    setTimeout(() => {
      scaleLike.value = withTiming(1);
    }, 200);
    translateX.value = withRepeat(
      withTiming(translateX.value + 10, {duration: 100}),
      4,
      true,
    );
    setTimeout(() => {
      translateX.value = withTiming(0);
    }, 500);
    setCount(count - 1);
  };
  const handleUnlikeButton = () => {
    setIsLike(!isLike);

    scaleLike.value = withTiming(1.3);
    setTimeout(() => {
      scaleLike.value = withTiming(1);
    }, 200);
    translateX.value = withRepeat(
      withTiming(translateX.value + 10, {duration: 100}),
      4,
      true,
    );
    setTimeout(() => {
      translateX.value = withTiming(0);
    }, 500);
    setCount(count + 1);
  };

  const likeButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleLike.value}],
    };
  });
  const textStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const AnimatedPressable = Animated.createAnimatedComponent(Icon);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        columnGap: 10,
      }}>
      {isLike ? (
        <AnimatedPressable
          name="heart"
          size={70}
          color={'red'}
          onPress={handleLikeButton}
          style={likeButtonStyle}
        />
      ) : (
        <AnimatedPressable
          name="heart-outline"
          size={70}
          color={'red'}
          onPress={handleUnlikeButton}
          style={likeButtonStyle}
        />
      )}
      <View style={{alignItems: 'center'}}>
        <Animated.Text style={[{fontSize: 40}, textStyle]}>
          {count}
        </Animated.Text>
        {/* <Animated.Text style={[{fontSize: 40}, textStyle]}>
          {count + 1}
        </Animated.Text> */}
      </View>
    </View>
  );
};

export default ButtonAnimation;

const styles = StyleSheet.create({});
