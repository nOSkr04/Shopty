import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const CategoryCard = memo(() => {
  return (
    <View style={styles.container}>

    </View>
  )
})

CategoryCard.displayName = "CategoryCard"

export { CategoryCard }

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: 150,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginLeft: 25,
  },
})