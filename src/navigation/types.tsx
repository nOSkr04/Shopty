import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";




export enum NavigationRoutes {
  Root = "Root",
  RootNavigator = "RootStackNavigator",
  // Tabs
  HomeTab = "HomeTab",
  // Screens
  LoginScreen = "LoginScreen",
  SignUpScreen = "SignUpScreen",
  // Sheets
  TestSheet = "TestSheet"
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

export type RootTabParamList = {
  HomeTab: undefined;
};

export type BottomSheetParamList = {
  RootNavigator: undefined;
  TestSheet: undefined;
};

// export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> =
  NativeStackScreenProps<BottomSheetParamList, T>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
    interface RootParamList extends BottomSheetParamList { }
    interface RootParamList extends RootTabParamList { }
  }
}
