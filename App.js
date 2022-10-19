import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const[texto, setText] =useState(
    "Texto inicial"
  );
  const[Imagem, setImagem] =useState(
    {uri:"https://cdn2.thedogapi.com/images/SJJtcXs4m.gif"}
  )
  function MudaTexto() {
    setText("Oi Alann")
    fetch('https://api.thedogapi.com/v1/images/search').then(res => res.json()).then(Imagem =>{
      console.log(Imagem[0].url)
      setImagem({uri:Imagem[0].url})
  })
}
/* https://positive-vibes-api.herokuapp.com/quotes/random */
  return (
    <SafeAreaView style={styles.container}>
      <Image style ={styles.imagem} source={Imagem}></Image>
      <Text>{texto}</Text>
      <TouchableOpacity onPress={MudaTexto} style={styles.button}>
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
