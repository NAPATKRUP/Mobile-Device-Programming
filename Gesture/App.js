import React, { useRef } from "react";
import { StyleSheet, View, Animated, PanResponder } from "react-native";

export default function App() {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({ x: pan.x._value, y: pan.y._value });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: (evt, gestureState) => {
      const touches = evt.nativeEvent.touches;
      // 1 Finger
      if (touches.length === 1) {
        pan.setValue({ x: gestureState.dx, y: gestureState.dy });
      }
      // 2 Finger
      else if (touches.length === 2) {
        let x1 = touches[0].locationX;
        let y1 = touches[0].locationY;

        let x2 = touches[1].locationX;
        let y2 = touches[1].locationY;

        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) / 100;
        Animated.spring(scale, {
          toValue: distance,
          friction: 3,
          useNativeDriver: false,
        }).start();
      }
    },
    onPanResponderRelease: () => {
      pan.flattenOffset();
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.screen}>
      <Animated.Image
        {...panResponder.panHandlers}
        source={require("./assets/logo.png")}
        style={{
          ...styles.logo,
          ...pan.getLayout(),
          transform: [{ scale: scale }],
        }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
});