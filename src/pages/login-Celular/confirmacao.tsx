// Componente React
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { confirmacaostyles } from "./confirmacaostyles";

export default function Confirmacao() {
  return (
    <View style={confirmacaostyles.container}>

      <View style={confirmacaostyles.iconstyle}>
        <Ionicons name="checkmark-circle-outline" size={60} color="#7b2cbf" />
      </View>

      <View style={confirmacaostyles.textContainer}>
        <Text style={confirmacaostyles.text}>
          Código verificado com sucesso!
        </Text>
        <Text style={confirmacaostyles.text2}>
          Para continuar, é preciso fornecer algumas permissões.
        </Text>
      </View>

      <TouchableOpacity style={confirmacaostyles.button}>
        <Text style={confirmacaostyles.continueBottomText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}
