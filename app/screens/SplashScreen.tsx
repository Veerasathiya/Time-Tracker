import { Colors } from "@/constants/Colors";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { moderateScale } from "../utils/responsiveFontSize";
import { useDispatch } from "react-redux";
import { setRecentData, setTimelineData } from "../redux/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

const recentdata = {
  taskid: 1,
  id: 1,
  name: "Web design",
  time_spent: 0,
};

const timelineData = [
  {
    id: 1,
    day_title: "Today",
    projects: [
      {
        id: 1,
        name: "Web design",
        time_spent: 0,
      },
      {
        id: 2,
        name: "R&D",
        time_spent: 0,
      },
      {
        id: 3,
        name: "Web development",
        time_spent: 0,
      },
    ],
  },
];

function SplashScreen(props: any) {
  const dispatch = useDispatch();

  const getTData = async () => {
    try {
      const value = await AsyncStorage.getItem("_timelineData");
      if (value !== null) {
        // value previously stored
        dispatch(setTimelineData(JSON.parse(value)));
      } else {
        dispatch(setTimelineData(timelineData));
      }
    } catch (e) {
      // error reading value
    }
  };
  const getRData = async () => {
    try {
      const value = await AsyncStorage.getItem("_recentData");
      if (value !== null) {
        // value previously stored
        dispatch(setRecentData(JSON.parse(value)));
      } else {
        dispatch(setRecentData(recentdata));
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getTData();
    getRData();
    moveScreen();
  }, []);

  const moveScreen = () => {
    setTimeout(() => {
      props?.navigation.reset({ index: 0, routes: [{ name: "AppTabs" }] });
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Title}>Time Tracking</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brand,
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    color: Colors.white,
  },
});

export default SplashScreen;
