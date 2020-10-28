import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const id = props.navigation.getParam("categoryId");
  const meal = MEALS.find((meal) => meal.id === id);
  console.log(meal)


  return (
    // <View style={styles.screen}>
    //   <Text>The Meal Detail Screen!</Text>
    //   <Text>Dish: {meal.title}</Text>
    //   <Text>Steps: {meal.steps}</Text>
    //   <Button
    //     title="Go Back to Categories"
    //     onPress={() => {
    //       // เขียนโค้ดเพิ่ม
    //       props.navigation.navigate("Categories")
    //     }}
    //   />
    // </View>
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.mealItem}>
          <View>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <Image
                source={{ uri: meal.imageUrl }}
                style={styles.bgImage}
              />
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
              <Text>{meal.duration}m</Text>
              <Text>{meal.complexity.toUpperCase()}</Text>
              <Text>{meal.affordability.toUpperCase()}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.title}>Ingredients</Text>
        <View style={styles.mapContainer}>
          {meal.ingredients.map((ingredient) => (
            <Text style={styles.text}>{ingredient}</Text>
          ))}
        </View>

        <Text style={styles.title}>Steps</Text>
        <View style={styles.mapContainer}>
          {meal.steps.map((ingredient) => (
            <Text style={styles.text}>{ingredient}</Text>
          ))}
        </View>


        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // เขียนโค้ดเพิ่ม
            props.navigation.popToTop();
          }}
        >
          <Text style={styles.txtBtn}>Go Back to Categories</Text>
        </TouchableOpacity>
        {/* <Button
          title="Go Back to Categories"
          onPress={() => {
            // เขียนโค้ดเพิ่ม
            props.navigation.popToTop();
          }}
        /> */}
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = MEALS.find((cat) => cat.id === catId);
  console.log("selectedCategory: ", selectedCategory);

  return {
    headerTitle: selectedCategory.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName="ios-star"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  mapContainer: {
    alignSelf: "flex-start",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 0,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  button: {
    color: "white",
    backgroundColor: "skyblue",
    padding: 15,
    margin: 10,
  },
  txtBtn: {
    fontSize: 18,
    color: "white",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    marginVertical: 5,
    marginHorizontal: 15,
  },
});

export default MealDetailScreen;
