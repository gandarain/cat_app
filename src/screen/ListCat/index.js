import React from 'react'
import { View, FlatList } from 'react-native'

import Header from '../../component/header'
import Loading from '../../component/loading'

import useListCat from './useListCat'
import CardCat from '../../component/cardCat'
import styles from './listCat.styles'

const renderLoading = state => () => {
  if (state.loading) {
    return <Loading />
  }

  return null
}

const renderListCat = state => (
  <FlatList
    onRefresh={state.onRefresh(state)}
    refreshing={state.loading}
    data={state.listCat}
    renderItem={({ item, index }) => (
      <CardCat item={item} onPress={state.onShowDetail(state, index)} />
    )}
    keyExtractor={item => item.id}
    onEndReachedThreshold={0.4}
    onEndReached={state.loadMore(state)}
    ListFooterComponent={renderLoading(state)}
  />
)

const ListCat = () => {
  const state = useListCat()

  return (
    <View style={styles.container}>
      <Header title="List Cat" />
      {state.refreshing ? <Loading /> : renderListCat(state)}
    </View>
  )
}

export default ListCat
