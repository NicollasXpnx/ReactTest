import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { View, TouchableOpacity, Text } from "react-native";
import { stylesForm3 } from "./stylesForm3";

export default function Formulario3() {
  return (
    <View style={stylesForm3.container2}>
      <TouchableOpacity style={stylesForm3.backButton} onPress={() => {}}>
        <Icon name="arrow-left" size={30} color="#7b2cbf" />
      </TouchableOpacity>

      <Icon
        name="camera"
        size={50}
        color="#7b2cbf"
        style={stylesForm3.camera}
      />

      <View style={stylesForm3.TextContainer}>
        <Text style={stylesForm3.text}>
          Agora é hora de fazer as fotos do seu imóvel.
        </Text>
        <Text style={stylesForm3.text2}>
          Você pode abrir a câmera ou subir a foto da sua galeria.
        </Text>
      </View>

      <View style={stylesForm3.buttonContainer}>
        <TouchableOpacity style={stylesForm3.button}>
          <Text style={stylesForm3.buttonText}>Abrir a câmera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesForm3.button2}>
          <Text style={stylesForm3.buttonText2}>Abrir galeria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
