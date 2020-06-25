import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Apple"
        imageSource={require("../../assets/one.jpg")}
      />

      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/two.jpg")}
      />

      <ImageDetail
        title="Plant"
        imageSource={require("../../assets/three.jpeg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
