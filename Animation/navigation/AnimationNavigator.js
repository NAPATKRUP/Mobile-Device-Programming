import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import SpringScreen from "../screens/SpringScreen";
import SequenceScreen from "../screens/SequenceScreen";
import ParallelScreen from "../screens/ParallelScreen";

const AnimationTabNavigator = createBottomTabNavigator({
  Spring: {
    screen: SpringScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons
          name="ios-arrow-dropup-circle"
          size={23}
          color={tabInfo.tintColor}
        />
      ),
    },
  },
  Sequence: {
    screen: SequenceScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="logo-buffer" size={23} color={tabInfo.tintColor} />
      ),
    },
  },
  Parallel: {
    screen: ParallelScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-git-merge" size={23} color={tabInfo.tintColor} />
      ),
    },
  },
});

export default createAppContainer(AnimationTabNavigator);
