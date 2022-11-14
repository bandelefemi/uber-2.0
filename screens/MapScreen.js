import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import tw from 'tailwind-react-native-classnames'
import Maps from '../components/Maps'
import MapView from 'react-native-maps'

export default function MapScreen() {
  return (
    // <SafeAreaView style={[GlobalStyles.droidSafeArea]}>
      <View>
        <View style={tw`h-1/2 bg-gray-300`}>
          <Maps />
        </View>
        <View style={tw`h-1/2 bg-red-400`}></View>
      </View>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({})