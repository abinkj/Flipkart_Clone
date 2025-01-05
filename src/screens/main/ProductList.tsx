import { StyleSheet, Text, View , ActivityIndicator, SafeAreaView ,FlatList, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
//import { SafeAreaView } from 'react-native-safe-area-context'

const ProductList = ({navigation}) => {
  const Tab = createBottomTabNavigator();


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get('https://fakestoreapi.com/products')
    .then(res=>{setProducts(res.data);})
    .catch(e => console.log(e))
    .finally(()=>setLoading(false));

  }, []);

  const renderItem = ({item}) =>(
    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { productId: item.id })}>
      <View style={styles.wrap}>
      <View style={styles.imgWrap}><Image source={{uri:item.image}} style={styles.img}/></View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.price}</Text>

      </View>
    </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.root} >
       <ScrollView showsVerticalScrollIndicator={false}>
       {loading ? (<View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={'black '}/>

      </View>): 
      <FlatList data={products}
      keyExtractor={elements=>elements.id}
      renderItem={renderItem }/>
    }
            </ScrollView>
     
    </SafeAreaView>
     
  )
}

export default ProductList

const styles = StyleSheet.create({
  root:{
    flex:1,
    paddingHorizontal:20,
    backgroundColor:'white'
  },
  loadingContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex: 1
  },
  img:{
    height:150,
    width:150,
    resizeMode:'contain'
  }, 
  wrap:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
    borderBottomWidth:1,
    borderBottomColor:'#DEDEDE',
    padding:10
   
  },
  imgWrap:{
    flex:1
  },
  textWrap:{
    flex:1
  },
  title:{
    fontSize:18,
    fontWeight:'bold'
  }
});
