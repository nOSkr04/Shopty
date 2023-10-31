import { StyleSheet, Text, } from 'react-native'
import React, { memo, useCallback } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Flatlist, ScrollView, View } from '../widgets/themed'
import { AppBar } from '../components/app-bar/app-bar'
import useColorScheme from '../hooks/use-color-scheme'
import colors from '../constants/colors'
import Feather from '@expo/vector-icons/Feather'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { MonMedium, MonThin } from '../widgets/styled-text'
import { CategoryCard } from '../components/category-card/category-card'
import { SpecialOfferCard } from '../components/special-offer-card/special-offer-card'
import { useNavigation } from '@react-navigation/native'
import { ProductCard } from '../components/product-card/product-card'

const HomeTab = memo(() => {
  const theme = useColorScheme();
  const textColor = useCallback(() => {
    return {
      borderColor: colors[theme].text
    }
  }, []);
  const backGroundColor = useCallback(() => {
    return {
      backgroundColor: colors[theme].background,
    }
  }, [])
  const data = [
    1, 2, 3, 4
  ];

  const specialOfferData = [
    1, 2, 3, 4
  ];

  const renderItem = useCallback(({ item }: { item: any }) => {
    return <CategoryCard />;
  }, [])

  const renderSpecialOffer = useCallback(() => {
    return <SpecialOfferCard />
  }, [])

  const renderProduct = useCallback(() => {
    return <ProductCard />
  }, [])

  const navigation = useNavigation();

  const renderHeader = useCallback(() => {
    return (
      <>
        <View style={styles.advertisingContainer}></View>
        <View style={styles.category}>
          <MonMedium style={styles.categoryText}>Categories</MonMedium>
          <TouchableOpacity style={styles.row}>
            <MonThin>
              Show All
            </MonThin>
            <View style={styles.w10} />
            <MaterialIcons name='arrow-forward-ios' color={colors[theme].text} size={12} />
          </TouchableOpacity>
        </View>
        <View style={styles.h15} />
        <Flatlist renderItem={renderItem} keyExtractor={item => item} data={data}
          showsHorizontalScrollIndicator={false} horizontal />
        <View style={styles.h40} />
        <View style={styles.category}>
          <MonMedium style={styles.categoryText}>Special Offer</MonMedium>
          <TouchableOpacity style={styles.row}>
            <MonThin>
              Show All
            </MonThin>
            <View style={styles.w10} />
            <MaterialIcons name='arrow-forward-ios' color={colors[theme].text} size={12} />
          </TouchableOpacity>
        </View>
        <View style={styles.h15} />
        <FlatList renderItem={renderSpecialOffer} horizontal data={specialOfferData} showsHorizontalScrollIndicator={false} />
        <View style={styles.h15} />
        <View style={styles.category}>
          <MonMedium style={styles.categoryText}>Products</MonMedium>
          <TouchableOpacity style={styles.row} onPress={() => console.log('asdf')}>
            <MonThin>
              Show All
            </MonThin>
            <View style={styles.w10} />
            <MaterialIcons name='arrow-forward-ios' color={colors[theme].text} size={12} />
          </TouchableOpacity>
        </View>
        <View style={styles.h15} />
      </>
    )
  }, [])

  const renderMainItem = useCallback(() => {
    return (
      <ProductCard />
    )
  }, [])

  return (
    <>
      <AppBar leading={
        <TouchableOpacity style={[styles.goBackContainer, textColor()]}>
          <MaterialIcons name='menu' color={colors[theme].text} size={16} />
        </TouchableOpacity>
      } action={
        <TouchableOpacity style={styles.shoppingBag}>
          <Feather size={18} color={colors[theme].text} name='shopping-bag' />
        </TouchableOpacity>
      } title='Home' />
      <Flatlist ListHeaderComponent={renderHeader} data={data} renderItem={renderMainItem} style={styles.container}   numColumns={2} columnWrapperStyle={styles.productContainer}    />
    </>
  )
})

HomeTab.displayName = "HomeTab"

export { HomeTab }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h40: {
    height: 40,
  },
  productContainer: {
    gap: 20,
    marginHorizontal: 25,
  },
  w10: {
    width: 10,
  },
  h15: {
    height: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    paddingHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
  },
  advertisingContainer: {
    marginVertical: 15,
    alignSelf: "center",
    borderRadius: 10,
    alignItems: 'center',
    height: 190,
    width: 360,
    marginHorizontal: 25,
    backgroundColor: 'grey',
    zIndex: 99,
  },
  shoppingBag: {
    padding: 5,
  },

  goBackContainer: {
    height: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    borderRadius: 5,
  },
})