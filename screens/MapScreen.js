import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'

export default function MapScreen() {
  return (
    <SafeAreaView style={[GlobalStyles.droidSafeArea]}>
      <View>
        <Text>MapScreen</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})