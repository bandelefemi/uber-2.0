import { SafeAreaView, StyleSheet, Text, 
  TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } 
from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env' 
import GlobalStyles from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from '@rneui/base/dist/Icon'
import { selectDestination } from '../slices/navSlice'


export default function NavigateCard() {

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const destination = useSelector(selectDestination)
  return (
    
    <View style={[tw`bg-white flex-1`]}>
      <Text style={tw`text-center py-2 text-lg`}>Hi, Femi</Text>
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

      <View style={tw`flex flex-row justify-evenly 
      border-t py-2 border-gray-100`}>
        <TouchableOpacity 
          style={tw`bg-black flex flex-row px-4 py-3 rounded-full w-24`}
          disabled={!destination}
          onPress={()=> {navigation.navigate('RideOptionsCard')}} >
          <Icon name='car' type='font-awesome' color={'white'} size={16} />
          <Text style={tw`text-white text-center ml-4`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-between w-24 
          px-4 py-3 bg-gray-100 rounded-full`}  >
          <Icon name='fast-food-outline' 
                type='ionicon' 
                color={'black'} 
                size={16} />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
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