import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavFavourites from './NavFavourites'
import tw from 'tailwind-react-native-classnames'

export default function RideOptionsCard() {
  return (
    <View style={tw`pt-10 bg-white flex-1`}>
      <NavFavourites/>
    </View>
  )
}

const styles = StyleSheet.create({})