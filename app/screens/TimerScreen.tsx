import { Colors } from "@/constants/Colors";
import React, { useEffect, useRef, useState } from "react";
import {
  BackHandler,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { moderateScale } from "../utils/responsiveFontSize";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { storeDataLocal, timerCal } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { setRecentData, setTimelineData } from "../redux/action";

function TimerScreen(props: any) {
  const dispatch = useDispatch();
  const timelineData = useSelector((state: any) => state.timelineData);

  const projectData = props.route.params.data;
  const taskid = props.route.params.taskid;

  const [start, setStart] = useState<number>(0);
  const [now, setNow] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(
    projectData?.time_spent != undefined ? projectData?.time_spent : 0
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const backAction = () => {
    stopTimerBackAction();
    props?.navigation.goBack();
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => {
      backHandler.remove();
    };
  }, [now, start]);

  useEffect(() => {
    autoStartTimer();
    return () => {
      clearInterval(timerRef.current as NodeJS.Timeout);
    };
  }, []);

  const autoStartTimer = () => {
    if (props.route.params?.autoStart) {
      if (start == 0 && totalTime == 0) {
        startTimer();
      } else if (totalTime > 0 && start === 0) {
        resume();
      }
    }
  };

  const updateData = (time: number) => {
    let arr = [...timelineData];
    arr.forEach((element: any) => {
      if (element?.id == taskid) {
        element?.projects.forEach((e: any) => {
          if (e?.id == projectData?.id) {
            e.time_spent = time;
            const objRec = { ...e, taskid };
            storeDataLocal(objRec, "_recentData");
            dispatch(setRecentData(objRec));
          }
        });
      }
    });
    dispatch(setTimelineData(arr));
    storeDataLocal(arr, "_timelineData");
  };

  const startTimer = () => {
    const now = new Date().getTime();
    setStart(now);
    setNow(now);
    timerRef.current = setInterval(() => {
      setNow(new Date().getTime());
    }, 100);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current as NodeJS.Timeout);
    setTotalTime((firstLap) => firstLap + now - start);
    updateData(totalTime + now - start);
    setStart(0);
    setNow(0);
  };

  const stopTimerBackAction = () => {
    clearInterval(timerRef.current as NodeJS.Timeout);
    updateData(totalTime + now - start);
  };

  const reset = () => {
    setStart(0);
    setNow(0);
  };

  const resume = () => {
    const now = new Date().getTime();
    setStart(now);
    setNow(now);
    timerRef.current = setInterval(() => {
      setNow(new Date().getTime());
    }, 100);
  };

  const timer = now - start;

  interface TimerProps {
    interval: number;
  }

  const Timer: React.FC<TimerProps> = ({ interval }) => {
    return <Text style={styles.timerText}>{timerCal(interval)}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <View style={styles.titleWrapper}>
            <Entypo
              name="circle"
              size={18}
              color={Colors.white}
              style={{ marginTop: 5 }}
            />
            <View>
              <Text style={styles.title}>{projectData?.name}</Text>
              <Text style={styles.subTitle}>⦿ {projectData?.name}</Text>
            </View>
          </View>
          <Text style={styles.highlightName}>Deep Focus</Text>
        </View>
      </View>
      <Timer interval={totalTime + timer} />
      {start == 0 && totalTime == 0 && (
        <Pressable style={styles.buttonWrapper} onPress={startTimer}>
          <FontAwesome name="play" size={45} color={Colors.white} />
        </Pressable>
      )}
      {totalTime > 0 && start === 0 && (
        <Pressable style={styles.buttonWrapper} onPress={resume}>
          <FontAwesome name="play" size={45} color={Colors.white} />
        </Pressable>
      )}
      {start > 0 && (
        <Pressable style={styles.buttonWrapper} onPress={stopTimer}>
          <FontAwesome name="pause" size={45} color={Colors.white} />
        </Pressable>
      )}
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
  header: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  titleContainer: {
    gap: 30,
  },
  titleWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: "400",
    color: Colors.white,
  },
  subTitle: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    color: "#ecd89f",
  },
  highlightName: {
    marginTop: 20,
    fontSize: moderateScale(12),
    fontWeight: "500",
    color: Colors.white,
    backgroundColor: "#899eec",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 50,
    alignSelf: "center",
  },
  timerText: {
    fontSize: moderateScale(40),
    fontWeight: "600",
    color: Colors.white,
  },
  buttonWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 150,
    alignItems: "center",
  },
});

export default TimerScreen;
