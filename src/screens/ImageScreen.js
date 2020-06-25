import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Apple"
        imageSource={require("../../assets/one.jpg")}
        imageScore={9}
      />

      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/two.jpg")}
        imageScore={6}
      />

      <ImageDetail
        title="Plant"
        imageSource={require("../../assets/three.jpeg")}
        imageScore={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
