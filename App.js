import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Button,
  Linking,
  Pressable
} from "react-native";

export default function App() {
  const [numero, setNumero] = useState(0);

  const contador = (x) => {
    if (numero == x - 1) {
      setNumero(x);
      if (x == 8) {
        alert("Parabéns!!");
        setNumero(0);
      }
    } else {
      setNumero(0);
      alert("Número errado, tente novamente!!!");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleBox}>
        <Pressable style={{width:'100%', height:'100%'}} onPress={() => Linking.openURL("https://www.youtube.com/@vidal_57")}>
          <Image source={require('./assets/pfp.jpg')} style={styles.pfp}></Image>
          <Text style={styles.title}>Vidal57's YT Channel</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=rmECgSdubeA")}>
          <Image source={require('./assets/deadcells1.jpg')} style={styles.thumb}></Image>
          <Text style={styles.texto}>Dead Cells #1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=lRaN1X3ZcII")}>
          <Image source={require('./assets/terraria5.jpg')} style={styles.thumb}></Image>
          <Text style={styles.texto}>Terraria #5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=C7AwptESr1I")}>
          <Image source={require('./assets/terraria4.jpg')} style={styles.thumb}></Image>
          <Text style={styles.texto}>Terraria #4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=V1L2TnghorA&pp=0gcJCckJAYcqIYzv")}>
          <Image source={require('./assets/terraria3.jpg')} style={styles.thumb}></Image>
          <Text style={styles.texto}>Terraria #3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=1miXl3ab7fA")}>
          <Image source={require('./assets/terraria2.jpg')} style={styles.thumb}></Image>
          <Text style={styles.texto}>Terraria #2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=EZXc_D0hF7g&pp=0gcJCckJAYcqIYzv")}>
          <Image source={require('./assets/terraria1.jpg')} style={styles.thumb}></Image>
          <Text style={styles.texto}>Terraria #1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=hWnxVxVSpI4")}>
          <Image source={require('./assets/ultrakill2.jpg')} style={styles.thumb}></Image>
          <Text style={styles.texto}>ULTRAKILL #2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=H8E8DuIuLLo")}>
          <Image source={require('./assets/ultrakill1.jpg')} style={styles.thumb}></Image>
          <Text style={styles.texto}>ULTRAKILL #1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#150055",
    alignItems: "center", //horizontal
    justifyContent: "center", //vertical
    flexDirection: "row",
    flexWrap: "wrap", //quebra em linhas ou colunas
    alignContent: "space-evenly",
    columnGap: 20,
    //columnGap: 30
  },
  titleBox:{
    flex: 1,
    backgroundColor: "#100066",
    //alignItems: 'flex-start', //horizontal
    //justifyContent: "center", //vertical
    //flexDirection: 'column',
    //flexWrap: 'wrap', //quebra em linhas ou colunas
    //alignContent: 'flex-end',
    //rowGap: 50,
    paddingTop: 40,
    borderWidth: 8,
    borderColor: '#003066',
  },
  title:{
    fontSize: 40,
    fontWeight: 700,
    color: '#fff',
    padding: '2%',
    paddingTop: 0
    //alignItems: 'flex-end', //horizontal
    //justifyContent: "center", //vertical
    //flexDirection: 'column',
    //flexWrap: 'wrap', //quebra em linhas ou colunas
    //alignContent: 'flex-end',
    //rowGap: 50,
  },
  box: {
    backgroundColor: "#57a0ff84",
    width: 170,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingTop: 10
  },
  texto: {
    flex:1,
    fontSize: 20,
    color: "#fff",
    fontWeight: 700,
    paddingTop: 5
  },
  thumb:{
    flex: 2,
    height: '90%',
    width: '90%',
    borderRadius: 25,
    resizeMode: 'contain'
  },
  pfp:{
    margin: '2%',
    marginBottom:0,
    height:70,
    width:70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    resizeMode: 'contain'
  }
});
