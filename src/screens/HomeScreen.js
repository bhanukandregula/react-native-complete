import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation);

  return (
    <View>
      <Text style={styles.text}>Navigation Demo</Text>
      <Button
        title="Display Siblings"
        onPress={() => {
          //console.log("Button pressed");
          props.navigation.navigate("List");
        }}
      />

      <Button
        title="Go to ComponentsScreen"
        onPress={() => {
          //console.log("Button pressed");
          props.navigation.navigate("Components");
        }}
      />

      <Button
        title="Go to ImageScreen"
        onPress={() => {
          //console.log("Button pressed");
          props.navigation.navigate("ImageScreen");
        }}
      />

      <Button
        title="Go to CounterScreen"
        onPress={() => {
          //console.log("Button pressed");
          props.navigation.navigate("CounterScreen");
        }}
      />

      <Button
        title="Check ColorScreen"
        onPress={() => {
          //console.log("Button pressed");
          props.navigation.navigate("ColorScreen");
        }}
      />

      <TouchableOpacity
        onPress={() => {
          console.log("List Pressed");
        }}
      >
        <Text> Go to Siblings Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
