import { StyleSheet,  } from "react-native";
import React, { ReactNode, memo, useCallback } from "react";
import useColorScheme from "../../hooks/use-color-scheme";
import colors from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { MonMedium } from "../../widgets/styled-text";

type Props = {
    leading?: ReactNode,
    action?: ReactNode,
    title?: string,
}

const AppBar = memo(({ leading, action, title }: Props) => {
    const theme = useColorScheme();
    const containerStyle = useCallback(
        () => {
            return {
                backgroundColor: colors[theme].background2,
            };
        },
        [theme],
    );

    return (
      <SafeAreaView style={[containerStyle(), styles.container]}>
        {leading}
        <MonMedium style={styles.title}>{title}</MonMedium>
        {action}
      </SafeAreaView>
    );
});

AppBar.displayName = "AppBar";

export { AppBar };

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flexDirection    : "row",
        justifyContent   : "space-between",
        alignItems       : "center",
        paddingVertical  : 15
    },

    title: {
        fontSize: 17,
    },
});