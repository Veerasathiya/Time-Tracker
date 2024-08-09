import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

export function timerCal(val: number) {
    const pad = (n: number) => (n < 10 ? "0" + n : n.toString());
    const duration = moment.duration(val);
    // const centiseconds = Math.floor(duration.milliseconds() / 10);

    // {pad(duration.hours())}:{pad(duration.minutes())}:{pad(duration.seconds())}:{pad(centiseconds)}

    return `${pad(duration.hours())}:${pad(duration.minutes())}:${pad(duration.seconds())}`
}

export const storeDataLocal = async (data : any, key: string) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
};

export const convertSecondsToReadableFormat = (val: number): string => {
    const pad = (n: number) => (n < 10 ? n : n.toString());
    const duration = moment.duration(val);

  return `${pad(duration.hours())}Hrs ${pad(duration.minutes())}mins`;
};