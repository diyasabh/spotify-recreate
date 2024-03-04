import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PlayButton = ({}) => {
  return (
    <View
      style={{
        width: 40, // Diameter of the circle
        height: 40, // Diameter of the circle
        borderRadius: 20, // Half of the width/height to make it a circle
        backgroundColor: "green", // Circle color
        justifyContent: "center", // Center the icon horizontally
        alignItems: "center", // Center the icon vertically
      }}
    >
      <Ionicons name="play" size={24} color="black" />
    </View>
  );
};

export default PlayButton;
