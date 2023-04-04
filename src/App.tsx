import React from 'react';
import product_data from './product_data.json';
import Card from './Card/Card';

import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>Store</Text>
      <TextInput style={styles.text_input}  placeholder='Ara...' placeholderTextColor={'black'} ></TextInput>
      <View >
      <FlatList 
        numColumns={2}
        data={product_data}
        renderItem={({item}) => <Card product={item}/>}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header_text: {
    marginTop:10,
    color:'purple',
    fontSize:35,
    fontWeight:'bold',
  },
  text_input:{
    width:Dimensions.get("window").width - 10,
    height:Dimensions.get("window").height/15,
    backgroundColor:'#f1f1f1',
    borderWidth:1,
    borderColor:'#f1f1f1',
    borderRadius:10,
    margin:10,
    marginLeft:5,
    marginRight:5,
  }
});

export default App;
