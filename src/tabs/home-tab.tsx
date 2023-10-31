import { StyleSheet, } from "react-native";
import React, { memo, useCallback } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Flatlist, View } from "../widgets/themed";
import { AppBar } from "../components/app-bar/app-bar";
import useColorScheme from "../hooks/use-color-scheme";
import colors from "../constants/colors";
import Feather from "@expo/vector-icons/Feather";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { MonMedium, MonThin } from "../widgets/styled-text";
import { CategoryCard } from "../components/category-card/category-card";
import { SpecialOfferCard } from "../components/special-offer-card/special-offer-card";
import { ProductCard } from "../components/product-card/product-card";
import useSWRInfinite from "swr/infinite";
import { ProductApi } from "../api";
import { IProduct } from "../interface/product";


const HomeTab = memo(() => {

  const theme = useColorScheme();

  const { data, size, setSize, isLoading } = useSWRInfinite(
    index => `product.${index}`,
    async index => {
      const page = index.split(".").pop();
      const res = await ProductApi.getProducts({ page: parseInt(`${page || 1}`, 10) + 1, limit: 10 });
      return res;
    },
    { revalidateAll: true },
  );

  const textColor = useCallback(() => {
    return {
      borderColor: colors[theme].text
    };
  }, [theme]);

console.log(data);
  const specialOfferData = [
    1, 2, 3, 4
  ];

  const renderItem = useCallback(() => {
    return <CategoryCard />;
  }, []);

  const renderSpecialOffer = useCallback(() => {
    return <SpecialOfferCard />;
  }, []);


  const renderHeader = useCallback(() => {
    return (
      <>
        <View style={styles.advertisingContainer} />
        <View style={styles.category}>
          <MonMedium style={styles.categoryText}>Categories</MonMedium>
          <TouchableOpacity style={styles.row}>
            <MonThin>
              Show All
            </MonThin>
            <View style={styles.w10} />
            <MaterialIcons color={colors[theme].text} name='arrow-forward-ios' size={12} />
          </TouchableOpacity>
        </View>
        <View style={styles.h15} />
        <Flatlist data={data} horizontal keyExtractor={item => item}
          renderItem={renderItem} showsHorizontalScrollIndicator={false} />
        <View style={styles.h40} />
        <View style={styles.category}>
          <MonMedium style={styles.categoryText}>Special Offer</MonMedium>
          <TouchableOpacity style={styles.row}>
            <MonThin>
              Show All
            </MonThin>
            <View style={styles.w10} />
            <MaterialIcons color={colors[theme].text} name='arrow-forward-ios' size={12} />
          </TouchableOpacity>
        </View>
        <View style={styles.h15} />
        <FlatList data={specialOfferData} horizontal renderItem={renderSpecialOffer} showsHorizontalScrollIndicator={false} />
        <View style={styles.h15} />
        <View style={styles.category}>
          <MonMedium style={styles.categoryText}>Products</MonMedium>
          <TouchableOpacity onPress={() => console.log("asdf")} style={styles.row}>
            <MonThin>
              Show All
            </MonThin>
            <View style={styles.w10} />
            <MaterialIcons color={colors[theme].text} name='arrow-forward-ios' size={12} />
          </TouchableOpacity>
        </View>
        <View style={styles.h15} />
      </>
    );
  }, [data, renderItem, renderSpecialOffer, specialOfferData, theme]);

  const renderMainItem = useCallback(({ item } : {item: IProduct}) => {
    return (
      <ProductCard item={item}/>
    );
  }, []);

  return (
    <>
      <AppBar action={
        <TouchableOpacity style={styles.shoppingBag}>
          <Feather color={colors[theme].text} name='shopping-bag' size={18} />
        </TouchableOpacity>
      } leading={
        <TouchableOpacity style={[styles.goBackContainer, textColor()]}>
          <MaterialIcons color={colors[theme].text} name='menu' size={16} />
        </TouchableOpacity>
      } title='Home' />
      <Flatlist ListHeaderComponent={renderHeader} columnWrapperStyle={styles.productContainer} data={(data || []).map(entry => entry?.data).flat() as IProduct[]} numColumns={2} renderItem={renderMainItem} style={styles.container} />
    </>
  );
});

HomeTab.displayName = "HomeTab";

export { HomeTab };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h40: {
    height: 40,
  },
  productContainer: {
    gap             : 20,
    marginHorizontal: 25,
  },
  w10: {
    width: 10,
  },
  h15: {
    height: 15,
  },
  row: {
    flexDirection: "row",
    alignItems   : "center",
  },
  category: {
    paddingHorizontal: 25,
    alignItems       : "center",
    flexDirection    : "row",
    justifyContent   : "space-between",
  },
  categoryText: {
    fontSize: 16,
  },
  advertisingContainer: {
    marginVertical  : 15,
    alignSelf       : "center",
    borderRadius    : 10,
    alignItems      : "center",
    height          : 190,
    width           : 360,
    marginHorizontal: 25,
    backgroundColor : colors.dark.border,
    zIndex          : 99,
  },
  shoppingBag: {
    padding: 5,
  },

  goBackContainer: {
    height        : 30,
    borderWidth   : 1,
    alignItems    : "center",
    justifyContent: "center",
    width         : 30,
    borderRadius  : 5,
  },
});