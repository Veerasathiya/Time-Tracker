import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppTabs from "./TapNavigator";
import TimerScreen from "../screens/TimerScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AppTabs" component={AppTabs} />
      <Stack.Screen
        name="TimerScreen"
        component={TimerScreen}
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
