import { StyleSheet, Text } from 'react-native'
import React, { memo, useCallback } from 'react'
import { View } from '../widgets/themed'
import {AppBar} from '../components/app-bar/app-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import useColorScheme from '../hooks/use-color-scheme'
import colors from '../constants/colors'
import { MaterialIcons, Feather } from '@expo/vector-icons'

const WishListTab = memo(() => {
    const theme = useColorScheme();
    const goBackColor = useCallback(() => {
        return {
            borderColor: colors[theme].text
        }
    }, []);
    const backGroundColor = useCallback(() => {
        return {
            backgroundColor: colors[theme].background,
        }
    }, [])
    return (
        <>
            <AppBar leading={
                <TouchableOpacity style={[styles.goBackContainer, goBackColor()]}>
                    <MaterialIcons name='menu' color={colors[theme].text} size={16} />
                </TouchableOpacity>
            } action={
                <TouchableOpacity style={styles.shoppingBag}>
                    <Feather size={18} color={colors[theme].text} name='shopping-bag' />
                </TouchableOpacity>
            } title='Wish list'/>
            <View style={[styles.container, backGroundColor()]}>
                <Text>WishListTab</Text>
            </View>
        </>
    )
})

WishListTab.displayName = "WishListTab"

export  {WishListTab}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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