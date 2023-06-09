import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Config from 'react-native-config'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import _ from 'lodash'
import StarRating from 'react-native-star-rating-widget'

import Routes from '../../navigation/Routes'
import styles from './cardCat.styles'

const renderImage = props => (
  <Image
    source={{ uri: `${Config.IMAGE_URL}${props.item.reference_image_id}.jpg` }}
    style={styles.image}
    resizeMode="stretch"
  />
)

const renderLink = (link, navigation) => (
  <Icon
    onPress={() => navigation.navigate(Routes.DetailCat, { link: link })}
    name="link"
    size={styles.linkIcon.size}
    color={styles.linkIcon.color}
  />
)

const renderTitle = (props, navigation) => (
  <View style={styles.cardTitle}>
    <Text style={styles.textTitle}>{_.get(props, 'item.name', '')}</Text>
    <View style={styles.link}>
      {renderLink(_.get(props, 'item.cfa_url', ''), navigation)}
      {renderLink(_.get(props, 'item.vetstreet_url', ''), navigation)}
      {renderLink(_.get(props, 'item.vcahospitals_url', ''), navigation)}
      {renderLink(_.get(props, 'item.wikipedia_url', ''), navigation)}
    </View>
  </View>
)

const renderSubtitle = props => (
  <View style={styles.cardTitle}>
    <Text style={styles.textSubTitle}>{_.get(props, 'item.id', '')}</Text>
  </View>
)

const renderDescription = props => (
  <View style={styles.cardTitle}>
    <Text style={styles.textDescription}>
      {_.get(props, 'item.description', '')}
    </Text>
  </View>
)

const renderDetail = (value, title) => (
  <View style={styles.containerDetail}>
    <Text style={styles.textStar}>{title}</Text>
    <StarRating
      rating={value}
      onChange={() => {}}
      color={styles.star.color}
      style={styles.star}
    />
  </View>
)

const CardCat = props => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.cardContainer}>
      <View style={styles.cardContent}>
        {renderImage(props)}
        {renderTitle(props, navigation)}
        {renderSubtitle(props)}
        {renderDescription(props)}
        {props.item.showDetail &&
          renderDetail(props.item.adaptability, 'Adaptability')}
        {props.item.showDetail &&
          renderDetail(props.item.affection_level, 'Affection')}
        {props.item.showDetail &&
          renderDetail(props.item.child_friendly, 'Child Friendly')}
      </View>
    </TouchableOpacity>
  )
}

export default CardCat
