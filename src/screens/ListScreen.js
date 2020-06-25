import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  //   const siblings = [
  //     {
  //       name: "Bhanu Kandregula",
  //       key: "1",
  //     },
  //     {
  //       name: "Raghu Kandregula",
  //       key: "2",
  //     },
  //     {
  //       name: "Guna Sekhar",
  //       key: "3",
  //     },
  //     {
  //       name: "Divya Sri Karri",
  //       key: "4",
  //     },
  //     {
  //       name: "Shyam Surisetty",
  //       key: "5",
  //     },
  //     {
  //       name: "Bunny Surisetty",
  //       key: "6",
  //     },
  //     {
  //       name: "Sreeja Konathala",
  //       key: "7",
  //     },
  //     {
  //       name: "Yashu Konathala",
  //       key: "8",
  //     },
  //     {
  //       name: "Chaddhu Vegi",
  //       key: "9",
  //     },
  //     {
  //       name: "Dharshith Vegi",
  //       key: "10",
  //     },
  //   ];

  const siblings = [
    {
      name: "Bhanu Kandregula",
    },
    {
      name: "Raghu Kandregula",
    },
    {
      name: "Guna Sekhar",
    },
    {
      name: "Divya Sri Karri",
    },
    {
      name: "Shyam Surisetty",
    },
    {
      name: "Bunny Surisetty",
    },
    {
      name: "Sreeja Konathala",
    },
    {
      name: "Yashu Konathala",
    },
    {
      name: "Chaddhu Vegi",
    },
    {
      name: "Dharshith Vegi",
    },
  ];

  // if we have key value in every siblings object on the array, then we can elimate keyExtractor in the FlatList
  //horizontal
  //showsHorizontalScrollIndicator={false}
  return (
    <FlatList
      keyExtractor={(siblings) => {
        return siblings.name;
      }}
      data={siblings}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
});

export default ListScreen;
