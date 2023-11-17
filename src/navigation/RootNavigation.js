import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TopTabNavigation from "./TopTabNavigation";
import { View } from "react-native";
import Header from "../screens/components/Header";

const RootNavigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Header />
        <TopTabNavigation />
      </NavigationContainer>
    </View>
  );
};

export default RootNavigation;
