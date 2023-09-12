import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style'
import { deleteFavorites } from '../../store/slices/favoriteSlices'

const Favorites = () => {
  const favs = useSelector(state => state.favorites)?.favs
  const dispatch = useDispatch()
  
  const deleteItem = (item) => {

   dispatch(deleteFavorites(item))
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.inContainer}>

        <Text style={styles.title}>{item?.categories?.[0]?.name}</Text>
        <Text style={styles.text}>{item?.company?.name}</Text>
        <Text style={styles.location}>{item?.locations?.[0]?.name}</Text>
        <Text style={styles.level}>{item?.levels?.[0]?.name}</Text>

        <TouchableOpacity style={styles.submit} onPress={()=>deleteItem(item)}>
          <Text style={styles.submitTitle}>Remove</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.Container}>
      <FlatList data={favs} renderItem={renderItem} />
    </View>
  )
}

export default Favorites;