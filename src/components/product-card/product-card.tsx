import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback, useState } from 'react'
import colors from '../../constants/colors'
import useColorScheme from '../../hooks/use-color-scheme'
import { MonThin } from '../../widgets/styled-text'
import { ScrollView } from '../../widgets/themed'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProductCard = memo(() => {
    const theme = useColorScheme();

    const [count, setCount] = useState(0);

    const border = useCallback(() => {
        return {
            borderColor: colors[theme].border,
        }
    }, [])

    return (
        <View style={[styles.container, border()]}>
            <View style={styles.img} />
            <View style={styles.h15} />
                <MonThin numberOfLines={3}>
                    asdf asdf asdf asdf asdf asdf asdfasdf asdf asdfas df a
                </MonThin>
            <View style={styles.h15} />
            <MonThin style={styles.title}>asdf</MonThin>
            <View style={styles.h15} />
            <View style={styles.row}> 
                <TouchableOpacity >
                    <AntDesign name='minuscircleo' size={23} color={colors[theme].darkBorder} />
                </TouchableOpacity>
                <MonThin>{count}</MonThin>
                <TouchableOpacity>
                    <AntDesign name='pluscircleo' size={23} color={colors[theme].darkBorder} />
                </TouchableOpacity>
            </View>
        </View>
    )
})

ProductCard.displayName = "ProductCard"

export { ProductCard }

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: 310,
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        
    },
    idContainer: {
        height: 36,
        width: 36,
        borderRadius: 100,
        borderWidth: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        alignSelf: 'center',
    },
    h15: {
        height: 15,
    },
    img: {
        alignSelf: 'center',
        height: 130,
        width: 130,
        backgroundColor: 'grey',
    },
})