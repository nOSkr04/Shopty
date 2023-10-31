import { StatusBar } from "expo-status-bar";
import { StyleSheet,AppState,AppStateStatus } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SWRConfig } from "swr";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { persistor, store } from "./src/store";
import useCachedResources from "./src/hooks/use-cached-resources";
import useColorScheme from "./src/hooks/use-color-scheme";
import Navigation from "./src/navigation/navigation-container";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SWRConfig
            value={{
              provider: () => new Map(),
              initFocus(callback: () => void) {
                let appState = AppState.currentState;
            
                const handleAppStateChange = (nextAppState: AppStateStatus) => {
                  if (appState.match(/inactive|background/) && nextAppState === "active") {
                    callback();
                  }
                  appState = nextAppState;
                };
            
                const subscription = AppState.addEventListener("change", handleAppStateChange);
            
                return () => {
                  subscription.remove();
                };
              },
              initReconnect(callback: () => void) {
                let isConnected = true;
            
                const handleNetStateChange = (nextNetState: NetInfoState) => {
                  if (!isConnected && nextNetState.isConnected) {
                    callback();
                  }
            
                  isConnected = !!nextNetState.isConnected;
                };
            
                const unsubscribe = NetInfo.addEventListener(handleNetStateChange);
            
                return () => {
                  unsubscribe();
                };
              },
            }}
          >
            <GestureHandlerRootView style={styles.container}>
              <SafeAreaProvider>
                  <Navigation colorScheme={colorScheme} />
                  <StatusBar backgroundColor="#122332" />
              </SafeAreaProvider>
            </GestureHandlerRootView>
          </SWRConfig>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
