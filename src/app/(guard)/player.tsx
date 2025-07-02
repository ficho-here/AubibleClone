import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import dummyBooks from '@/dummyBooks';
import { SafeAreaView } from 'react-native-safe-area-context';
const Player = () => {
  const book = dummyBooks[0];
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-slate-900'>
      <Pressable onPress={() => router.back()}     className='absolute top-16 left-4 bg-slate-800 rounded-full p-2'>
      <AntDesign name="down" size={24} color="white" />
      </Pressable>

      <Image source={{uri: book.thumbnail_url}} className='w-10/12 aspect-square rounded-[40]' />

      <Text className='text-white'>Player</Text>
    </SafeAreaView>
  )
}

export default Player