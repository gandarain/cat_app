import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Config from 'react-native-config'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Routes from '../../navigation/Routes'
import Header from '../../component/header'

import useListCat from './useListCat'
import styles from './listCat.styles'

const navigateToDetail = navigation => () => {
  navigation.navigate(Routes.DetailCat)
}

const ListCat = () => {
  const { navigation } = useListCat()

  return (
    <View style={styles.container}>
      <Header title="List Cat" />
      <TouchableOpacity style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={{ uri: 'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg' }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.cardTitle}>
            <Text style={styles.textTitle}>Detail Cat</Text>
            <View style={styles.link}>
              <Icon
                name="link"
                size={styles.linkIcon.size}
                color={styles.linkIcon.color}
              />
              <Icon
                name="link"
                size={styles.linkIcon.size}
                color={styles.linkIcon.color}
              />
              <Icon
                name="link"
                size={styles.linkIcon.size}
                color={styles.linkIcon.color}
              />
            </View>
          </View>
          <View style={styles.cardTitle}>
            <Text style={styles.textSubTitle}>{Config.BASE_URL}</Text>
          </View>
          <View style={styles.cardTitle}>
            <Text style={styles.textDescription}>Detail Cat</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ListCat
