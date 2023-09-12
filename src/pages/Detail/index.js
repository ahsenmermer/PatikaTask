import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setFavorites } from '../../store/slices/favoriteSlices';


const Detail = (props) => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const detail = props?.route?.params?.item

  const addFavorites = () => {
    dispatch(setFavorites(detail))
    navigation.navigate("Favorites")
  }

  return (
    <ScrollView>
      <View style={{padding:10}}>
        <Text style={styles.title}>{detail.categories?.[0]?.name} </Text>
        <Text style={styles.location}>Locations: {detail.locations?.[0]?.name}</Text>
        <Text style={styles.location}>Job level: {detail.levels?.[0]?.name} </Text>
      </View>
      <View style={styles.inContainer}>
        <Text style={styles.job}>Job Detail</Text>
      </View>
      <ScrollView style={styles.detailContainer}>
        <Text style={{padding:6}}>{detail.contents}</Text>
      </ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.submitTitle}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submit} onPress={addFavorites}>
          <Text style={styles.submitTitle}>Favorite Job</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Detail;