import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "../utils/responsiveFontSize";
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import moment from "moment";
import { convertSecondsToReadableFormat, timerCal } from "../utils/functions";

const ProjectCard = (props: any) => {
  const getTotalTimeSpent = () => {
    let arr = props.data?.projects;
    let totalTimeNum = 0;
    if (arr) {
      arr.forEach((element: any) => {
        totalTimeNum += element?.time_spent;
      });
    }
    return convertSecondsToReadableFormat(totalTimeNum);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.totleTime}>{getTotalTimeSpent()}</Text>
      </View>
      <View style={styles.cardWrapper}>
        {props.data?.projects &&
          props.data?.projects.map((item: any, index: number) => {
            return (
              <Pressable
                onPress={() => props?.onClick(item, index)}
                style={[
                  styles.card,
                  props.data?.projects.length - 1 == index && {
                    borderBottomWidth: 0,
                  },
                ]}
                key={index}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Octicons name="dot-fill" size={18} color={Colors.brand} />
                  <Text style={styles.projectName}>{item?.name}</Text>
                </View>
                <View style={styles.projectTime}>
                  <FontAwesome name="play" size={8} color={Colors.lightGray} />
                  <Text style={styles.projectTimeText}>
                    {timerCal(item.time_spent)}
                  </Text>
                </View>
              </Pressable>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: "500",
    color: Colors.black,
  },
  totleTime: {
    fontSize: moderateScale(12),
    fontWeight: "500",
    color: Colors.black,
  },
  cardWrapper: {
    // marginTop: 5,
  },
  card: {
    flexDirection: "row",
    paddingVertical: 25,
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
  },
  projectName: {
    fontSize: moderateScale(14),
    fontWeight: "500",
    color: Colors.black,
  },
  projectTime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderColor: Colors.lightGray,
    borderWidth: 1,
  },
  projectTimeText: {
    fontSize: moderateScale(10),
    color: Colors.lightGray,
  },
});

export default ProjectCard;
