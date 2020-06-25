// creating a react component here, which returns jsx
// jsx looks like a html, for understanding
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  // we can only show const value in the JSX, but not the Java Script object - FYI
  const greetings = "Good morning";

  // or we can create assign the react value to const and render in JSX
  const wishes = <Text> Its a great day!! Have fun </Text>;

  const name = "Bhanu Prakash Kandregula";

  // style will also work with: style={{ fontSize: 30 }}
  return (
    <View>
      <Text style={styles.textStyle}>Ji Shri Ram</Text>
      <Text style={styles.textStyle}>Ji Bhajarangabali</Text>
      <Text>{greetings}</Text>
      {wishes}
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
  },
  subHeaderStyle: {},
});

export default ComponentsScreen;
