import React, { useState } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

import Header from '../../component/header'
import Loading from '../../component/loading'
import styles from './detailCat.styles'

const renderLoading = () => (
  <View style={styles.containerLoading}>
    <Loading />
  </View>
)

const DetailCat = props => {
  const [loading, setLoading] = useState(true)

  return (
    <View style={styles.container}>
      <Header title="Detail Cat" showBackButton />
      {loading && renderLoading()}
      <WebView
        source={{ uri: props.route.params.link }}
        onLoad={() => setLoading(false)}
      />
    </View>
  )
}

export default DetailCat
