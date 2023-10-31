import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import { MonBold, MonMedium, MonSemiBold, MonThin } from '../widgets/styled-text'
import { ScrollView } from '../widgets/themed'

const HomeTab = memo(() => {
    return (
      <ScrollView style={styles.container} darkColor='red' lightColor='blue'   >
        <MonBold style={{fontSize:30}}>
        HomeTab
        </MonBold>
        <MonSemiBold style={{fontSize:30}}>HomeTab</MonSemiBold>
        <MonMedium style={{fontSize:30}}>HomeTab</MonMedium>
        <MonThin style={{fontSize:30}}>HomeTab</MonThin>
      </ScrollView>
    )
  })

  HomeTab.displayName="HomeTab"

export {HomeTab}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})