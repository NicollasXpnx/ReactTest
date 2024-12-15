import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { logincelularstyles } from "./login-celularstyles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";

export default function LoginCelular() {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={logincelularstyles.container}>
      <TouchableOpacity
        style={logincelularstyles.backButton}
        onPress={() => {}}
      >
        <Feather name="arrow-left" size={30} color={"#7b2cbf"} />
      </TouchableOpacity>

      <Text style={logincelularstyles.text}>
        Para acessar sua conta no Poundflats, por favor, insira seu número de
        celular abaixo
      </Text>

      <TextInputMask
        type={"cel-phone"}
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        value={inputValue}
        onChangeText={setInputValue}
        style={logincelularstyles.numberinput}
        keyboardType="numeric"
        placeholder="Número do celular"
      />
      <Text style={logincelularstyles.text2}>
        Para confirmar sua identidade, enviaremos um código via SMS para o
        número informado
      </Text>

      <TouchableOpacity style={logincelularstyles.continuebutton}>
        <Text style={logincelularstyles.continuetext}>Continuar</Text>
      </TouchableOpacity>

      <View style={logincelularstyles.dividerContainer}>
        <Text style={logincelularstyles.line} />
        <Text style={logincelularstyles.text3}>OU</Text>
        <View style={logincelularstyles.line} />
      </View>

      <View style={logincelularstyles.socialmidia}>
        <TouchableOpacity
          style={logincelularstyles.socialmidiaButton}
          onPress={() => {}}
        >
          <Text style={logincelularstyles.htext}>Continuar com Facebook</Text>
          <Ionicons
            name="logo-facebook"
            size={20}
            color="#7b2cbf"
            style={logincelularstyles.iconStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={logincelularstyles.socialmidiaButton}
          onPress={() => {}}
        >
          <Text style={logincelularstyles.htext}>Continuar com Google</Text>
          <Ionicons
            name="logo-google"
            size={20}
            color="#7b2cbf"
            style={logincelularstyles.iconStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={logincelularstyles.socialmidiaButton}
          onPress={() => {}}
        >
          <Text style={logincelularstyles.htext}>Continuar com E-mail</Text>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#7b2cbf"
            style={logincelularstyles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
