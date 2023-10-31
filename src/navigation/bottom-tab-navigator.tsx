import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationRoutes, RootTabParamList } from "./types";

import {FontAwesome, MaterialIcons, Ionicons} from "@expo/vector-icons"
import { HomeTab } from "../tabs/home-tab";
import { AnimatedTabBar } from "../components/tab-bar/animated-tab-bar";
import useColorScheme from "../hooks/use-color-scheme";
import colors from "../constants/colors";
import {WishListTab} from "../tabs/wish-list-tab";
import {CategoriesTab} from "../tabs/categories-tab";
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
     
      <BottomTab.Screen
        component={WishListTab}
        name={NavigationRoutes.WishListTab}
        options={{ tabBarIcon : () => <MaterialIcons color={colors[theme].text} name="favorite-border" size={24}  />,
        headerShown: false,}}
      />
     
      <BottomTab.Screen
        component={CategoriesTab}
        name={NavigationRoutes.CategoriesTab}
        options={{ tabBarIcon : () => <Ionicons color={colors[theme].text} name="grid" size={24}  />,
        headerShown: false,}}
      />
     
      
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
