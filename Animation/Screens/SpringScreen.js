import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";

const SpringScreen = (props) => {
  const springVal = useRef(new Animated.Value(1)).current;
  const spring = () => {
    Animated.spring(springVal, {
      toValue: 1.5,
      friction: 1,
    }).start(() => {
      springVal.setValue(1);
    });
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Animated.Image
          style={[styles.img, { transform: [{ scale: springVal }] }]}
          source={require("../assets/IT.png")}
          resizeMode="contain"
        />
      </View>
      <Button title="Run Spring" onPress={() => spring()} />
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

export default SpringScreen;
