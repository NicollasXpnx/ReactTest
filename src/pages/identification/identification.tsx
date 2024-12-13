import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { indentstyles } from "./indentstyles";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

export default function indentification() {
  return (
    <View style={indentstyles.container}>
      <TouchableOpacity style={indentstyles.backButton} onPress={() => {}}>
        <Icon name="arrow-left" size={30} color="#7b2cbf" />
      </TouchableOpacity>

      <Text style={indentstyles.title}>
        Para fazer o login no Pounflats, você precisa se identificar com alguma
        das opções abaixo
      </Text>

      <TouchableOpacity style={indentstyles.button} onPress={() => {}}>
        <Icon name="user" size={60} color="#7b2cbf" />
        <Text style={indentstyles.htext}>Sou Hóspede</Text>
      </TouchableOpacity>

      <TouchableOpacity style={indentstyles.button} onPress={() => {}}>
        <Icon2 name="account-tie-outline" size={60} color="#7b2cbf" />
        <Text style={indentstyles.htext}>Sou Anfitrião</Text>
      </TouchableOpacity>
    </View>
  );
}
