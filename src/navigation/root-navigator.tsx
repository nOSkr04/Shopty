import React from "react";
import { NavigationRoutes, RootStackParamList } from "./types";
import BottomTabNavigator from "./bottom-tab-navigator";
import { useDispatch, useSelector } from "react-redux";
import { IAuth } from "../interface/auth";
import { useSWRToken } from "../hooks/use-swr-token";
import { authMe } from "../store/auth-slice";
import { AuthApi } from "../api";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screen/auth/login-screen";


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const dispatch = useDispatch();

  const { user } = useSelector((state: { auth: IAuth }) => state.auth);

  const { isInitialLoading } = useSWRToken(
    "swr.user.me",
    async () => {
      return await AuthApi.me();
    },
    {
      onSuccess: authData => {
        dispatch(authMe(authData));
      },
    },
  );

  // if (isInitialLoading) {
  //   return null;
  // }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* {user ? (
        <>
          <Stack.Screen component={BottomTabNavigator} name={NavigationRoutes.Root} />
          <Stack.Screen component={LoginScreen} name={NavigationRoutes.LoginScreen} />
        </>
      ) : (
        <>
         <Stack.Screen component={BottomTabNavigator} name={NavigationRoutes.Root} />
          <Stack.Screen component={LoginScreen} name={NavigationRoutes.LoginScreen} />
        </>
      )} */}
        <Stack.Screen component={BottomTabNavigator} name={NavigationRoutes.Root} />
          {/* <Stack.Screen component={LoginScreen} name={NavigationRoutes.LoginScreen} /> */}
    </Stack.Navigator>
  );
}

export default RootNavigator;
