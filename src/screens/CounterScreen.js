import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ImageDetail from "../components/ImageDetail";

const CounterScreen = () => {
  //let counter = 0;
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //counter++;
          setCounter(counter + 1);
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
          // counter--;
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
