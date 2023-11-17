import React, { useEffect, useState } from "react";
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { setMake, setModel, setYear } from "../../redux/GlobalSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { year, make, model, currentScreen } = useSelector(
    (state) => state.global
  );

  const [icon, setIcon] = useState("close");
  const [headerText, setHeaderText] = useState("Choose Year");

  const onBackPress = () => {
    if (currentScreen === "Model") {
      dispatch(setModel(null));
      navigation.navigate("Make");
    } else if (currentScreen === "Make") {
      dispatch(setMake(null));
      navigation.navigate("Year");
    } else {
      dispatch(setYear(null));
      BackHandler.exitApp();
    }
  };

  useEffect(() => {
    if (currentScreen === "Year") {
      setIcon("close");
      setHeaderText("Choose Year");
    } else if (currentScreen === "Make") {
      setHeaderText("Choose Make");
      setIcon("left");
    } else {
      setHeaderText("Choose Model");
      setIcon("left");
    }
  }, [currentScreen]);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={{ flex: 1 }} onPress={onBackPress}>
        <Icon name={icon} size={30} color="red" />
      </TouchableOpacity>
      <View style={{ flex: 4, alignItems: "center", position: "absolute" }}>
        <Text>{headerText}</Text>
        <Text>
          {year} {make} {model}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
