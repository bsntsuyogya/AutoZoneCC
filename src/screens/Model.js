import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { fetchVechicleMakeModels } from "../Services/APICalls";
import Element from "./components/Element";
import Divider from "./components/Divider";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScreen, setModel } from "../redux/GlobalSlice";
import { useFocusEffect } from "@react-navigation/native";

const Model = () => {
  const dispatch = useDispatch();
  const { make, currentScreen } = useSelector((state) => state.global);
  const [modelList, setModelList] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(setCurrentScreen("Model"));
      if (currentScreen === "Model") {
        fetchVechicleMakeModels(make).then((res) => {
          setModelList(res?.data?.Results);
        });
      }
    }, [currentScreen])
  );

  return (
    <View>
      {!!modelList && (
        <FlatList
          data={modelList}
          key={(item) => item.item.Make_ID}
          renderItem={(year) => (
            <Element
              onPress={(value) => dispatch(setModel(value))}
              value={year.item.Model_Name}
            />
          )}
          ItemSeparatorComponent={() => <Divider />}
        />
      )}
    </View>
  );
};

export default Model;
