import { FlatList, Image, StyleSheet, Text, 
    TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from '@rneui/base'

export default function NavOptions() {

    const data = [
        {
            id: '123',
            title: 'Get a lift',
            image: 'https://links.papareact.com/3pn',
            screen: 'MapScreen'
        },
        {
            id: '456',
            title: 'Get food',
            image: 'https://links.papareact.com/28w',
            screen: 'FriendScreen'
        }
    ]
  return (
    <FlatList 
     data={data}
     horizontal
     keyExtractor={(item) => item.id}
     renderItem={({item}) => (
        <TouchableOpacity style={tw`p-2 pt-6 pb-8 bg-gray-100 m-2 w-36`} >
            <View>
                <Image
                    style={{width: 120, height: 120, resizeMode: 'contain'}}
                    source={{ uri: item.image}} />
                <Text style={tw`mt-2 font-semibold text-lg`}>{item.title}</Text>
                <Icon style={tw`p-2 bg-gray-600 rounded-full w-10 mt-4`}
                    name='arrowright'
                    type='antdesign'
                    color={'white'}
                    />    
            </View>
        </TouchableOpacity>
     )} />
  )
}

const styles = StyleSheet.create({})