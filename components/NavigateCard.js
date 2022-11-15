import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env' 
import GlobalStyles from '../GlobalStyles'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'


export default function NavigateCard() {

  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    
    <View style={[tw`bg-white flex-1`]}>
      <Text style={tw`text-center py-5 text-lg`}>Hi, Femi</Text>
      <View style={tw`border-t border-gray-100 flex-shrink`}>
        <GooglePlacesAutocomplete 
          placeholder='where to'
          styles={styles}
          debounce={400}
          nearbyPlacesAPI='GooglePlacesSearch'
          fetchDetails={true}
          minLength={2}
          returnKeyType={'search'}
          onPress={(data, details)=> {
            dispatch(setDestination({
              location: details.geometry.location,
              description: data.description
            }))
            navigation.navigate('RideOptionsCard')

          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }} />
      </View>
      <NavFavourites />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 50,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
})