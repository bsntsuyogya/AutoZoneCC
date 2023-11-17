import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { fetchAllVechicleMake } from "../Services/APICalls";
import Element from "./components/Element";
import Divider from "./components/Divider";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { setCurrentScreen, setMake } from "../redux/GlobalSlice";

const Make = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { year } = useSelector((state) => state.global);
  const [vechicleMakeList, setVechicleMakeList] = useState(null);

  useFocusEffect(() => {
    dispatch(setCurrentScreen("Make"));
  });

  useEffect(() => {
    fetchAllVechicleMake(year).then((res) => {
      const sortedData = res?.data?.Results.sort((a, b) => {
        if (a.MakeName > b.MakeName) {
          return 1;
        }
        if (b.MakeName > a.MakeName) {
          return -1;
        }
        return 0;
      });
      setVechicleMakeList(sortedData);
    });
  }, []);
  return (
    <View>
      {!!vechicleMakeList && (
        <FlatList
          data={vechicleMakeList}
          key={(item) => item.item.Make_ID}
          renderItem={(make) => (
            <Element
              onPress={(value) => {
                dispatch(setMake(value));
                navigation.navigate("Model");
              }}
              value={make.item?.MakeName}
            />
          )}
          ItemSeparatorComponent={() => <Divider />}
        />
      )}
    </View>
  );
};

export default Make;
