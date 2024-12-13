import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { loginstyles } from "./loginstyles";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Ionicons";

export default function login() {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={loginstyles.container}>
      <TouchableOpacity style={loginstyles.backBotton} onPress={() => {}}>
        <Icon name="arrow-left" size={30} color="#7b2cbf" />
      </TouchableOpacity>

      <Text style={loginstyles.title}>
        Para acessar sua conta no Poundflats, por favor, insira seu endereço de
        e-mail abaixo
      </Text>

      <TextInput
        style={loginstyles.textinput}
        placeholder="E-mail"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <TouchableOpacity style={loginstyles.continuebutton}>
        <Text style={loginstyles.continuetext}>Continuar</Text>
      </TouchableOpacity>

      <View style={loginstyles.dividerContainer}>
        <View style={loginstyles.line} />
        <Text style={loginstyles.text}>OU</Text>
        <View style={loginstyles.line} />
      </View>

      <View style={loginstyles.socialmidia}>
        <TouchableOpacity
          style={loginstyles.socialmidiaButton}
          onPress={() => {}}
        >
          <Text style={loginstyles.htext}>Continuar com Facebook</Text>
          <Icon2
            name="logo-facebook"
            size={20}
            color="#7b2cbf"
            style={loginstyles.iconStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={loginstyles.socialmidiaButton}
          onPress={() => {}}
        >
          <Text style={loginstyles.htext}>Continuar com Google</Text>
          <Icon2
            name="logo-google"
            size={20}
            color="#7b2cbf"
            style={loginstyles.iconStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={loginstyles.socialmidiaButton}
          onPress={() => {}}
        >
          <Text style={loginstyles.htext}>Continuar com o Celular</Text>
          <Icon2
            name="phone-portrait-outline"
            size={20}
            color="#7b2cbf"
            style={loginstyles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
