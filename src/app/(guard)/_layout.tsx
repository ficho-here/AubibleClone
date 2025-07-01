import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
const GuardedLayout = () => {
  const {isSignedIn, isLoaded} = useAuth();


    if (!isLoaded){
        return <ActivityIndicator/>
    }
    if(!isSignedIn){
        return <Redirect href='/signIn'/>
    }


  return (
    <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        <Stack.Screen name='player' options={{headerShown: false, animation: 'fade_from_bottom'}}/>
    </Stack>


)
}

export default GuardedLayout