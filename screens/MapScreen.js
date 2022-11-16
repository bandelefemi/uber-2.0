import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import tw from 'tailwind-react-native-classnames'
import Maps from '../components/Maps'
// import MapView from 'react-native-maps'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from '@rneui/base/dist/Icon'
import { useNavigation } from '@react-navigation/native'

export default function MapScreen() {

  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
  return (
    // <SafeAreaView style={[GlobalStyles.droidSafeArea]}>
      <View>

        <TouchableOpacity style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-2 rounded-full shadow-lg`}
          onPress={()=> navigation.navigate('HomeScreen')} >
          <Icon name='menu' />
        </TouchableOpacity>
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