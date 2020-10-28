import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      //เขียนโค้ดเพิ่ม
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
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        //เขียนโค้ดเพิ่ม
        style={{ width: "100%" }}
        data={ props.listData }
        renderItem={ renderMealItem }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
