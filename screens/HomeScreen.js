import { StyleSheet, Text, View, Platform, 
    StatusBar,SafeAreaView, Image } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env' 
import { setDestination } from '../slices/navSlice'
import { setOrigin } from '../slices/navSlice'
import { useDispatch } from 'react-redux'
import NavFavourites from '../components/NavFavourites'
// import { store } from '../store'

export default function HomeScreen() {

  const dispatch = useDispatch()
  return (

    // <Provider store={store}>
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
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en"
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 20,
            }
          }}
          placeholder="Where are you"
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={'search'}
          onPress={(data, details = null )=> {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null))
          }}
        />

        <NavOptions />

        <NavFavourites/>
      </View>
    </SafeAreaView>

    // </Provider>
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