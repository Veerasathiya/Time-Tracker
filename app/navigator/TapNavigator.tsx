import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TimelineScreen from "../screens/TimelineScreen";
import AllTaskScreen from "../screens/AllTaskScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => null,
      }}
    >
      <Tab.Screen
        name="TimelineScreen"
        component={TimelineScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer-outline" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="AllTaskScreen"
        component={AllTaskScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox-outline" size={size} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default AppTabs;
