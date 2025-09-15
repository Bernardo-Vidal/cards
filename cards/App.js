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
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <Text>dfkjhaskdjlfhsa</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.box1} onPress={() => contador(1)}>
          <Image source={require("./assets/favicon.png")} />
          <Text style={styles.texto}>Box 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box2}
          onPress={
            (() => contador(2),
            () => Linking.openURL("https://www.youtube.com/shorts/QMR8rlPCOJU"))
          }
        >
          <Text style={styles.texto}>Vídeo do Youtube</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box3} onPress={() => contador(3)}>
          <Text style={styles.texto}>Box 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box1} onPress={() => contador(4)}>
          <Text style={styles.texto}>Box 4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box2} onPress={() => contador(5)}>
          <Text style={styles.texto}>Box 5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box3} onPress={() => contador(6)}>
          <Text style={styles.texto}>Box 6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box1} onPress={() => contador(7)}>
          <Text style={styles.texto}>Box 7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box2} onPress={() => contador(8)}>
          <Text style={styles.texto}>Box 8</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#ffc3c3ff",
    alignItems: "center", //horizontal
    justifyContent: "center", //vertical
    flexDirection: "column",
    flexWrap: "wrap", //quebra em linhas ou colunas
    alignContent: "space-evenly",
    rowGap: 50,
    //columnGap: 30
  },
  title: {
    backgroundColor: "#ffc3c3ff",
    alignItems: "center", //horizontal
    justifyContent: "center", //vertical
    flexDirection: "column",
    flexWrap: "wrap", //quebra em linhas ou colunas
    alignContent: "space-evenly",
    rowGap: 50,
  },
  box1: {
    backgroundColor: "#57a0ff84",
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  box2: {
    backgroundColor: "#57a0ff84",
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  box3: {
    backgroundColor: "#57a0ff84",
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  texto: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 700,
  },
});
