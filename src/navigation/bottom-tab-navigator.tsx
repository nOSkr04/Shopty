import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationRoutes, RootTabParamList } from "./types";

import FontAwesome from "@expo/vector-icons/FontAwesome"
import { HomeTab } from "../tabs/home-tab";
import { AnimatedTabBar } from "../components/tab-bar/animated-tab-bar";
import useColorScheme from "../hooks/use-color-scheme";
import colors from "../constants/colors";
const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator<RootTabParamList>();
  const theme = useColorScheme();
  return (
    <BottomTab.Navigator initialRouteName={NavigationRoutes.HomeTab} 
    tabBar={(props) => <AnimatedTabBar {...props} />}
    screenOptions={{ headerShown: false, tabBarActiveTintColor: colors[theme].text, }}
    >
      <BottomTab.Screen
        component={HomeTab}
        name={NavigationRoutes.HomeTab}
        options={{ tabBarIcon : () => <FontAwesome color={colors[theme].text} name="home" size={24}  />,
        headerShown: false,}}
      />
     
      
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
