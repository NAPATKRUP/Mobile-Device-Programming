import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={ itemData.item.title }
        duration={ itemData.item.duration }
        complexity={ itemData.item.complexity }
        affordability={ itemData.item.affordability }
        image={ itemData.item.imageUrl }
        onSelectMeal={() => {
          // เขียนโค้ดเพิ่ม
          props.navigation.navigate("MealDetail", { categoryId: itemData.item.id })
        }}
      />

      // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์เมื่อเรียกใช้ <MealItem>
      // <View style={{ height: 50, width: "40%" }}>
      //   <Text>{itemData.item.title}</Text>
      // </View>
    );
  };

  // const catId = ...รับข้อมูล id ของประเภทอาหาร...

  // const displayedMeals = MEALS.filter(
  //   (meal) => meal.categoryIds.indexOf(catId) >= 0
  // );

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={ MEALS }
        renderItem={ renderMealItem }
      />
    </View>

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์เมื่อใช้ <FlatList>
    // <View>
    //   <Text>Category Meals Screen!!</Text>
    // </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  console.log("selectedCategory: ", selectedCategory);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
