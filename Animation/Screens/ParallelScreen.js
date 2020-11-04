import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";

const ParallelScreen = (props) => {
  const springVal = useRef(new Animated.Value(1)).current;
  const translate = useRef(new Animated.Value(0)).current;
  const move = translate.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, -50, 0, 50, 0],
  });

  const animation = () => {
    Animated.parallel([
      Animated.spring(springVal, {
        toValue: 1.5,
        duration: 1000,
        useNativeDriver: true,
        friction: 1.5,
      }),
      Animated.timing(translate, {
        toValue: 1.5,
        duration: 3000,
        useNativeDriver: true,
        friction: 1.5,
      }),
    ]).start(() => {
      springVal.setValue(1), translate.setValue(0);
    });
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Animated.Image
          source={require("../assets/IT.png")}
          style={[styles.img, { transform: [{ scale: springVal }] }]}
          resizeMode="contain"
        />
        <Animated.Text
          style={{
            transform: [{ translateX: move }],
            fontSize: 28,
            color: "orange",
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Welcome To Faculty of IT!!
        </Animated.Text>
      </View>
      <Button title="Run Parallel" onPress={() => animation()} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

export default ParallelScreen;
