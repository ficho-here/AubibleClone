import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
const Player = () => {
  return (
    <View className='flex-1 items-center justify-center bg-slate-700'>
      <Pressable onPress={() => router.back()}     className='absolute top-16 left-4 bg-slate-800 rounded-full p-2'>
      <AntDesign name="down" size={24} color="white" />
      </Pressable>
      <Text>Player</Text>
    </View>
  )
}

export default Player