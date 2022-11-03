import { StyleSheet, Text, View, Platform, 
    StatusBar,SafeAreaView } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'

export default function HomeScreen() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} >
      <View>
        <Text style={styles.text}>I am the light!!!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: 'blue',
        paddingTop: Platform.OS=== "android" ? StatusBar.currentHeight : 0
    },

    text: {
        color: "blue"
    }
})