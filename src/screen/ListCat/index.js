import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Routes from '../../navigation/Routes'

const navigateToDetail = navigation => () => {
  navigation.navigate(Routes.DetailCat)
}

const useListCat = () => {
  const navigation = useNavigation()

  return {
    navigation
  }
}

const ListCat = () => {
  const { navigation } = useListCat()

  return (
    <View>
      <Text>List Cat</Text>
      <TouchableOpacity onPress={navigateToDetail(navigation)}>
        <Text>Detail Cat</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListCat
