import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import tw from 'tailwind-react-native-classnames'
import Maps from '../components/Maps'
// import MapView from 'react-native-maps'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

export default function MapScreen() {

  const Stack = createNativeStackNavigator()
  return (
    // <SafeAreaView style={[GlobalStyles.droidSafeArea]}>
      <View>
        <View style={tw`h-1/2 bg-gray-300`}>
          <Maps />
        </View>
        <View style={tw`h-1/2 bg-white`}>
          <Stack.Navigator>
            <Stack.Screen 
              name='NavigateCard'
              component={NavigateCard}
              options={{
                headerShown: false
              }} />
            
            <Stack.Screen 
              name='RideOptionsCard'
              component={RideOptionsCard}
              options={{
                headerShown: false
              }} />
          </Stack.Navigator>
        </View>
      </View>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({})