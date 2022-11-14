import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import tw from 'tailwind-react-native-classnames'


export default function FoodScreen() {
  return (
    <SafeAreaView style={[tw`bg-gray-300`, GlobalStyles.droidSafeArea]}>
        <View>
            <Text>Food Screen</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})