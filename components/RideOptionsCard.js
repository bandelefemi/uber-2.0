import { FlatList, Image, StyleSheet, Text, 
    TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import NavFavourites from './NavFavourites'
import tw from 'tailwind-react-native-classnames'
import { Icon } from '@rneui/base/dist/Icon'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'
import Intl from 'intl'
import 'intl/locale-data/jsonp/en-NG'

export default function RideOptionsCard() {

    const data = [
        {
            id: 'Uber-x-123',
            title: 'Uber X',
            multiplier: 1,
            image: 'https://links.papareact.com/3pn'
        },
        {
            id: 'Uber-Classic-456',
            title: 'Uber Classic',
            multiplier: 1.2,
            image: 'https://links.papareact.com/5w8'
        },
        {
            id: 'Uber-Deluxe-789',
            title: 'Uber Deluxe',
            multiplier: 1.75,
            image: 'https://links.papareact.com/7pf'
        }
    ]

    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const SURGE_PRICE = 1.5
  return (
    <View style={tw`bg-white flex-grow`}>
        <View>
            <TouchableOpacity style={tw`absolute 
            top-3 p-3 left-5 z-50 rounded-full`}>
                <Icon name='chevron-left' type='fontawesome'
                        
                        onPress={()=> {navigation.navigate('NavigateCard')}} />
            </TouchableOpacity>
            <Text style={tw`text-center py-5 
            font-semibold text-lg`}>Select a ride - {travelTimeInformation?.distance?.text}</Text>
        </View>

        <FlatList 
            data={data}
            style={tw``}
            keyExtractor={(item)=> item.id}
            renderItem={({item: {id, title, image, multiplier}, item})=> (
                <TouchableOpacity onPress={()=> setSelected(item)} 
                     >
                    <View style={tw`flex-row ${id === selected?.id && "bg-gray-200"} items-center justify-between px-5`}
                         >
                        <Image source={{uri: image}}
                            style={{width: 100, height: 
                                80, resizeMode: 'contain'}} />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`font-semibold text-lg`}>{title}</Text>
                            <Text style={tw`text-xs`}>{travelTimeInformation?.duration?.text} travel time</Text>
                        </View>
                        <Text style={tw`text-lg font-semibold`}>

                            {new Intl.NumberFormat('en-NG', {
                                style: 'currency',
                                currency: 'NGN',
                                minimumFractionDigits: 0
                            }).format(
                                (travelTimeInformation?.duration.value * multiplier * SURGE_PRICE).toFixed()
                            )}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        /> 

        <View>
            <TouchableOpacity style={tw`m-3 bg-black py-5 flex items-center rounded-full ${!selected && "bg-gray-300"} `}>
              {selected &&   <Text style={tw`text-center -m-3 text-lg text-white`}>Choose {selected?.title}</Text> }
            </TouchableOpacity>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({})