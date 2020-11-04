import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";

const SequenceScreen = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const spinAnim = useRef(new Animated.Value(1)).current;
  const spin = spinAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "360deg", "0deg"],
  });

  const fadeIn = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(spinAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Animated.Image
          source={require("../assets/IT.png")}
          style={[
            styles.img,
            { opacity: fadeAnim, transform: [{ rotate: spin }] },
          ]}
          resizeMode="contain"
        />
      </View>
      <Button title="Run Sequence" onPress={() => fadeIn()} />
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

export default SequenceScreen;
