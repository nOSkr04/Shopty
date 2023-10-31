import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const SpecialOfferCard = memo(() => {
  return (
    <View style={styles.container}>
    </View>
  )
})

SpecialOfferCard.displayName = "SpecialOfferCard"

export { SpecialOfferCard }

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: 10,
    width: 243,
    backgroundColor: 'grey',
    marginLeft: 25,
  },
})