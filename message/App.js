import { StyleSheet, View } from "react-native";
import React from "react";
import Status from "./components/Status";
import MessageList from "./components/MessageList";

export default class App extends React.Component {
  renderMessageList() {
    return <View style={styles.content}></View>;
  }
  renderInputMethodEditor() {
    return <View style={styles.inputMethodEditor}></View>;
  }
  renderToolbar() {
    return <View style={styles.toolbar}></View>;
  }
  render() {
    return (
      <View style={styles.container}>
        <Status />
        {this.renderMessageList()}
        {this.renderToolbar()}
        {this.renderInputMethodEditor()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  content: {
    flex: 1,
    backgroundColor: "green",
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: "blue",
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.04)",
    backgroundColor: "white",
  },
});
