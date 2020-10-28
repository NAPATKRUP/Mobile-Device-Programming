import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Keyboard,
} from "react-native";
import Colors from "../constants/colors";

const GameScreen = (props) => {
  // ...เพิ่มโค้ดกำหนด state...
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [rounds, setRounds] = useState(0);

  let confirmedOutput;

  // ส่วนแสดงผลลัพธ์การทายตัวเลขของผู้เล่น
  if (confirmed) {
    let result = "";
    if (selectedNumber > props.answer) result = "greater";
    else if (selectedNumber < props.answer) result = "lower";
    else if (selectedNumber == props.answer) props.onGameOver(rounds);

    confirmedOutput = (
      <View style={styles.resultContainer}>
        <Text>You selected</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{selectedNumber}</Text>
        </View>
        <Text>
          The answer is {result}: Round: {rounds}
        </Text>
      </View>
    );
  }

  // ฟังก์ชันสำหรับอัพเดทค่าที่ผู้เล่นกรอกให้กับสเตท enteredValue
  const numberInputHandler = (inputText) => {
    // ...เพิ่มโค้ด...อัพเดทค่าสเตท enteredValue ด้วยค่า inputText ที่รับมา
    setEnteredValue(inputText);
  };

  // ฟังก์ชันสำหรับเคลียร์ค่าในสเตท enteredValue
  const resetInputHandler = () => {
    // ...เพิ่มโค้ด...อัพเดทค่าสเตท enteredValue ให้เป็น ""
    setEnteredValue("");
  };

  // ฟังก์ชันสำหรับอัพเดทค่าสเตทต่างๆ เมื่อผู้เล่นกด confirm
  const confirmInputHandler = () => {
    // ...เพิ่มโค้ด แปลงค่า enteredValue ให้เป็นตัวเลข
    setSelectedNumber(parseInt(enteredValue));
    // ...เพิ่มโค้ด อัพเดทค่าในสเตทต่างๆ ตามที่กำหนด
    setConfirmed(true);
    setEnteredValue("");
    setRounds(rounds + 1);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Guess a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          //...เพิ่ม property value และ onChangeText...
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.accent}
              // ...เพิ่ม property onPress...
              onPress={resetInputHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.primary}
              // ...เพิ่ม property onPress...
              onPress={confirmInputHandler}
            />
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default GameScreen;
