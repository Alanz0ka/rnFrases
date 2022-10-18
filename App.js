import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style ={styles.imagem} source={{uri:"http://pm1.narvii.com/8300/4a87698377a09123b0ebaf29b9776984058dd48fr1-720-403v2_00.jpg"}}></Image>
      <Text>generico</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Me toque!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem:{
    width:500,
    height:300,
  },
  button:{
    borderRadius:20,
    backgroundColor:'white',
    width:110,
    height:90,
  },
});
