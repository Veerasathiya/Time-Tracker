export const setTimelineData = (data: any) => {
  return {
    type: "setTimelineData",
    timelineData: data,
  };
};
export const setRecentData = (data: any) => {
  return {
    type: "setRecentData",
    recentData: data,
  };
};
