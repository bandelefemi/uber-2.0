import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import tw from 'tailwind-react-native-classnames'

export default function NavFavourites() {

    const data = [
        {
            id: '123',
            icon: 'home',
            location: 'Home',
            destination: 'Judges Quarters, Makurdi, Benue'
        },
        {
            id: '456',
            icon: 'briefcase',
            location: 'Work',
            destination: 'Upper Echelon, Higher Higher, Far Away'
        }
    ]
  return (
    <FlatList data={data}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={()=> (
                <View style={[tw`bg-gray-200`, {height: 0.5}]} />
              )}
              renderItem={({item})=> (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon 
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={item.icon}
                        type="ionicon"
                        color={'white'}
                        size={18} />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>
                            {item.location}
                        </Text>
                        <Text style={tw`text-gray-400`}>
                            {item.destination}
                        </Text>
                    </View>
                </TouchableOpacity>
              )} />
  )
}

const styles = StyleSheet.create({})