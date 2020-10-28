import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const id = props.navigation.getParam("categoryId");
  const meal = MEALS.find((meal) => meal.id === id);
  console.log(meal)


  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Text>Dish: {meal.title}</Text>
      <Text>Steps: {meal.steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          props.navigation.navigate("Categories")
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = MEALS.find((cat) => cat.id === catId);
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

export default MealDetailScreen;
