import { StyleSheet, View } from "react-native";
import React, { memo, useCallback, useState } from "react";
import colors from "../../constants/colors";
import useColorScheme from "../../hooks/use-color-scheme";
import { MonThin } from "../../widgets/styled-text";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IProduct } from "../../interface/product";
import { Image } from "expo-image";

const ProductCard = memo(({ item }: { item: IProduct }) => {
    const theme = useColorScheme();
    console.log(item);
    const [quantity, setQuantity] = useState(0);

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity !== 0) {
            setQuantity(quantity - 1);
        }
    };

    const border = useCallback(() => {
        return {
            borderColor: colors[theme].border,
        };
    }, [theme]);

    return (
      <View style={[styles.container, border()]}>
        <Image contentFit="contain" placeholder={item.blurHash} source={item.url} style={styles.img}/>
        <View style={styles.h15} />
        <View style={styles.descriptionContainer}>
          <MonThin numberOfLines={3}>
            asdf asdf asdf asdfasdf 
          </MonThin>
          <View style={styles.h15} />
          <MonThin style={styles.title}>{item.name}</MonThin>
          <View style={styles.h15} />
          <View style={styles.row}>
            <TouchableOpacity onPress={decrease}>
              <AntDesign color={colors[theme].darkBorder} name='minuscircleo' size={23} />
            </TouchableOpacity>
            <MonThin>{quantity}</MonThin>
            <TouchableOpacity onPress={increase}>
              <AntDesign color={colors[theme].darkBorder} name='pluscircleo' size={23} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
});

ProductCard.displayName = "ProductCard";

export { ProductCard };

const styles = StyleSheet.create({
    descriptionContainer: {
        justifyContent: "space-between",
        flex          : 1,
    },
    container: {
        flex        : 1,
        borderWidth : 1,
        borderRadius: 10,
        padding     : 20,
        marginBottom: 15,
    },
    idContainer: {
        height      : 36,
        width       : 36,
        borderRadius: 100,
        borderWidth : 1,
    },
    row: {
        flexDirection : "row",
        alignItems    : "center",
        justifyContent: "space-around"
    },
    title: {
        alignSelf: "center",
        textAlign: "center",
    },
    h15: {
        height: 15,
    },
    img: {
        alignSelf: "center",
        height   : 130,
        width    : 130,
    },
});