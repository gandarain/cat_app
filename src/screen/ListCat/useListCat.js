import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Service from '../../service'

const getListCat = async state => {
  const limit = 10
  try {
    const response = await Service.get('breeds', {
      limit,
      page: state.page
    })
    state.setLoading(false)
    state.setListCat(response.data)
  } catch (error) {
    state.setListCat([])
    state.setLoading(false)
  }
}

const useListCat = () => {
  const { navigation } = useNavigation()
  const [listCat, setListCat] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(true)

  const state = {
    navigation,
    listCat,
    setListCat,
    page,
    setPage,
    loading,
    setLoading
  }

  useEffect(() => {
    getListCat(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}

export default useListCat
