import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES } from '../constans'

const Home = () => {
  const router = useRouter()

  return (
    <SafeAreaView>
      <Text>Home New</Text>
    </SafeAreaView>
  )
}

export default Home
