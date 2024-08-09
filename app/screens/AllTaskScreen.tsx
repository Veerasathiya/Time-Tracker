import { Colors } from "@/constants/Colors";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "../utils/responsiveFontSize";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function AllTaskScreen(props: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardWrapper}>
        <Text style={styles.title}>All Task</Text>
      </View>
      <View style={styles.listWrapper}>
        {/* <FlatList
          data={[0, 1, 2]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20, gap: 35 }}
          renderItem={({ item }) => <ProjectCard />}
          keyExtractor={(item, index) => index.toString()}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brand,
  },
  cardWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
    paddingBottom: 40,
  },
  cardContent: {
    marginTop: 20,
    flexDirection: "row",
  },
  cardDetail: {
    flex: 1,
    alignItems: "flex-start",
  },
  projectWrapper: {},
  projectTitle: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    color: Colors.white,
  },
  projectName: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "#bcb9b4",
  },
  highlightName: {
    marginTop: 20,
    fontSize: moderateScale(12),
    fontWeight: "500",
    color: Colors.white,
    backgroundColor: "#899eec",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 50,
  },
  cardTimer: {
    gap: 10,
    alignItems: "center",
  },
  timerText: {
    fontSize: moderateScale(22),
    fontWeight: "600",
    color: Colors.white,
  },
  title: {
    fontSize: moderateScale(26),
    fontWeight: "500",
    color: Colors.white,
  },
  listWrapper: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default AllTaskScreen;
