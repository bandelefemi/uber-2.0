import { StyleSheet, Text, View, Platform, 
    StatusBar,SafeAreaView, Image } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env' 

export default function HomeScreen() {
  return (
    <SafeAreaView style={[tw`bg-white`, GlobalStyles.droidSafeArea]} >
      <View style={tw` p-5`}>
        <Image
            style={{
                width: 100, height: 100, resizeMode: 'contain'
            }} 
            source={{
                uri: 'https://links.papareact.com/gzs'
            }} />

        <GooglePlacesAutocomplete 
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder="Where are you"
        />

        <NavOptions />
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