import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Year from "../screens/Year";
import Make from "../screens/Make";
import Model from "../screens/Model";

const Tab = createMaterialTopTabNavigator();
const TopTabNavigation = () => {
  const preventTabClick = {
    tabPress: (e) => {
      e.preventDefault();
    },
  };
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        swipeEnabled: false,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: "black",
        tabBarIndicatorStyle: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen name="Year" component={Year} listeners={preventTabClick} />
      <Tab.Screen name="Make" component={Make} listeners={preventTabClick} />
      <Tab.Screen name="Model" component={Model} listeners={preventTabClick} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
