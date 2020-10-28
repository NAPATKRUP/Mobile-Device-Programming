// import คอมโพเนนต์ที่จำเป็น
import React from "react";
import { createStackNavigator } from "react-navigation-stack"; // v.4 ขึ้นไป
import { createAppContainer } from "react-navigation";

import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const MealsNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    Categories: { screen: CategoriesScreen },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "white",       
    }
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: { screen: FavoritesScreen, },
    MealDetail: { screen: MealDetailScreen, },
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "white",
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: { 
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-restaurant" size={23} color={tabInfo.tintColor}/>
        ),
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-star" size={23} color={tabInfo.tintColor}/>
        ),
      },
    },
  },
  {
    NavigationConfig: {
      tabBarOptions : { activeTintColor: "orange", },
    },
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: { screen: FiltersScreen, },
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "white",
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: "Meals", },
    },
    Filters: { screen: FiltersNavigator, },
  },
  {
    contentOptions: { activeTintColor: "#4a148c", },
  }
);

export default createAppContainer(MainNavigator);
