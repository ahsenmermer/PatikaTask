import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const navigation = useNavigation()
  const [page, setPage] = useState(1);
  
  const pageInc = () => {
    setPage(page + 1)
  }

  const fetchData = () => {
    setLoading(true);
    axios.get("https://www.themuse.com/api/public/jobs?page=" + page)
      .then((res) => {
        setData([...data, ...res?.data?.results])
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  useEffect(() => {
    fetchData();
  }, [page]);


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.inContainer} onPress={() => navigation.navigate ("Detail",{item})}>
        <Text style={styles.title}>{item?.categories?.[0]?.name}</Text>
        <Text style={styles.text}>{item?.company?.name}</Text>
        <Text style={styles.location}>{item?.locations?.[0]?.name}</Text>
        <Text style={styles.level}>{item?.levels?.[0]?.name}</Text>
      </TouchableOpacity>
    )
  }

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
        activeOpacity={0.9}
        onPress={pageInc}
        style={styles.loadMoreBtn}
        >
          <Text style={styles.btnText}>Load More</Text>
          { loading ? (
            <ActivityIndicator color="white" style={{marginLeft:8}} />
          ) : null }
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.Container}>
      <FlatList data={data} renderItem={renderItem} ListFooterComponent={renderFooter} />
    </View>
  )
}

export default Home;