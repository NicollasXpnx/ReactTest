import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { loginEmailstyles } from "./loginEmailstyles";  
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function loginEmailstylesstyles() {
  const [inputValue, setInputValue] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={loginEmailstyles.container}>
      <TouchableOpacity style={loginEmailstyles.backBotton} onPress={() => {}}>
        <Feather name="arrow-left" size={30} color="#7b2cbf" />
      </TouchableOpacity>

      <Text style={loginEmailstyles.title}>
        Para acessar sua conta no Poundflats, por favor, insira seu endereço de
        e-mail abaixo
      </Text>

      <TextInput
        style={loginEmailstyles.textinput}
        placeholder="E-mail"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <View style={loginEmailstyles.inputsenha}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Senha"
          secureTextEntry={hidePassword}
        />
        <TouchableOpacity
          style={loginEmailstyles.eye}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <FontAwesome5
            name={hidePassword ? "eye" : "eye-slash"}
            size={20}
            color="#d3d3d3"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={loginEmailstyles.continuebutton}>
        <Text style={loginEmailstyles.continuetext}>Continuar</Text>
      </TouchableOpacity>

      <View style={loginEmailstyles.dividerContainer}>
        <View style={loginEmailstyles.line} />
        <Text style={loginEmailstyles.text}>OU</Text>
        <View style={loginEmailstyles.line} />
      </View>

      <View style={loginEmailstyles.socialmidia}>
        <TouchableOpacity
          style={loginEmailstyles.socialmidiaButton}
          onPress={() => {}}
        >
          <Text style={loginEmailstyles.htext}>Continuar com Facebook</Text>
          <Ionicons
            name="logo-facebook"
            size={20}
            color="#7b2cbf"
            style={loginEmailstyles.iconStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={loginEmailstyles.socialmidiaButton}
          onPress={() => {}}
        >
          <Text style={loginEmailstyles.htext}>Continuar com Google</Text>
          <Ionicons
            name="logo-google"
            size={20}
            color="#7b2cbf"
            style={loginEmailstyles.iconStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={loginEmailstyles.socialmidiaButton}
          onPress={() => {}}
        >
          <Text style={loginEmailstyles.htext}>Continuar com o Celular</Text>
          <Ionicons
            name="phone-portrait-outline"
            size={20}
            color="#7b2cbf"
            style={loginEmailstyles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
