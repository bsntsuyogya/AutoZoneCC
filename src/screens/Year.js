import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Element from "./components/Element";
import Divider from "./components/Divider";
import { useDispatch } from "react-redux";
import { setCurrentScreen, setYear } from "../redux/GlobalSlice";

const getYears = () => {
  const numberOfYears = 30;
  const years = Array(numberOfYears)
    .fill("")
    .map((element, index) => {
      return {
        key: 1995 + index + "",
        num: 1995 + index,
      };
    });
  return years;
};

const Year = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [years, setYears] = useState([]);

  useFocusEffect(() => {
    dispatch(setCurrentScreen("Year"));
  });

  useEffect(() => {
    setYears(
      getYears().sort((a, b) => {
        if (a.num > b.num) {
          return -1;
        }
        if (b.num > a.num) {
          return 1;
        }
        return 0;
      })
    );
    return () => {};
  }, []);

  return (
    <View style={styles.yearsContainer}>
      {years.length !== 0 && (
        <FlatList
          data={years}
          key={(item) => item.item.key}
          renderItem={(year) => (
            <Element
              onPress={(value) => {
                dispatch(setYear(value));
                navigation.navigate("Make");
              }}
              value={year.item.num}
            />
          )}
          ItemSeparatorComponent={() => <Divider />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  yearsContainer: {
    paddingHorizontal: 10,
  },
});

export default Year;
