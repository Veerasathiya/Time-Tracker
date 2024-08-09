const initialState = {
  timelineData: [],
  recentData: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "setTimelineData":
      return { ...state, timelineData: action.timelineData };
    case "setRecentData":
      return { ...state, recentData: action.recentData };
  }
  return state;
};

export default reducer;
