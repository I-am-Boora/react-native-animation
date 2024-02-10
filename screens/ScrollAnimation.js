import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Animated, {
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ScrollAnimation = () => {
  const scrollY = useSharedValue(0);
  const previousScrollY = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    const isScrollingForward = event.contentOffset.y > previousScrollY.value;
    console.log('Scrolling forward:', isScrollingForward);

    // Update previousScrollY with current scroll position
    previousScrollY.value = event.contentOffset.y;
    // Update scrollY
    scrollY.value = event.contentOffset.y;
    if (isScrollingForward) {
      translateY.value = withTiming(200);
    } else {
      translateY.value = withTiming(0);
    }
  });
  const fbutton = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  return (
    <View style={{flex: 1}}>
      <Animated.ScrollView
        bounces={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {[1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: 'orange',
                width: '90%',
                height: 200,
                borderRadius: 20,
                marginVertical: 5,
              }}
            />
          );
        })}
      </Animated.ScrollView>
      <Animated.View
        style={[
          {
            width: 80,
            height: 80,
            borderRadius: 80,
            backgroundColor: 'green',
            position: 'absolute',
            bottom: 20,
            right: 20,
          },
          fbutton,
        ]}></Animated.View>
    </View>
  );
};

export default ScrollAnimation;

const styles = StyleSheet.create({});
