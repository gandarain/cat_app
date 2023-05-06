import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import _ from 'lodash'

import Service from '../../service'
import pagination from '../../constant/pagination'

const getListCat = async state => {
  const limit = pagination.LIMIT

  try {
    const response = await Service.get('breeds', {
      params: {
        limit,
        page: state.page
      }
    })

    const data = _.get(response, 'data', [])

    state.page === pagination.DEFAULT_PAGE
      ? state.setListCat(data)
      : state.setListCat(state.listCat.concat(data))
    state.setLoading(false)
    state.setRefreshing(false)
  } catch (error) {
    state.setListCat([])
    state.setLoading(false)
    state.setRefreshing(false)
  }
}

const onRefresh = state => () => {
  state.setRefreshing(true)
  state.setListCat([])
  state.setLoading(true)
  state.setPage(0)
}

const loadMore = state => () => {
  if (!state.loading) {
    state.setLoading(true)
    state.setPage(state.page + 1)
  }
}

const onShowDetail = (state, index) => () => {
  const updatedData = {
    ...state.listCat[index],
    showDetail: state.listCat[index].showDetail ? false : true
  }

  let newData = [...state.listCat]
  newData[index] = updatedData

  state.setListCat(newData)
}

const useListCat = () => {
  const { navigation } = useNavigation()
  const [listCat, setListCat] = useState([])
  const [page, setPage] = useState(pagination.DEFAULT_PAGE)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(true)

  const state = {
    navigation,
    listCat,
    setListCat,
    page,
    setPage,
    loading,
    setLoading,
    refreshing,
    setRefreshing
  }

  useEffect(() => {
    if (loading) {
      getListCat(state)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, page])

  return {
    ...state,
    onRefresh: () => onRefresh(state),
    loadMore: () => loadMore(state),
    onShowDetail: onShowDetail
  }
}

export default useListCat
