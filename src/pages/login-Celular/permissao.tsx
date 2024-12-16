import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { permissaostyles } from "./permissaostyle";
import { Ionicons } from "@expo/vector-icons";

export default function permissao() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleEnable = () => setIsEnabled(!isEnabled);

  return (
    <View style={permissaostyles.container}>
      <Ionicons
        name="notifications-outline"
        size={60}
        color="#7b2cbf"
        style={permissaostyles.icon}
      />

      <View style={permissaostyles.textContainer}>
        <Text style={permissaostyles.text1}>Ligar notificações</Text>
        <Text style={permissaostyles.text2}>
          Para receber notificações importantes sobre reservas, check-in e
          check-out é só clicar no botão abaixo
        </Text>
      </View>

      <View style={permissaostyles.notifications}>
        <Text style={permissaostyles.notificationText}>
          Quero receber, também, notificações sobre novos apartamentos
          disponíveis e ofertas da Poundsflats
        </Text>
        <Switch
          style={permissaostyles.switch}
          trackColor={{ false: "#E0E0E0", true: "#E0E0E0" }}
          thumbColor={isEnabled ? "#7b2cbf" : "#FFFFFF"}
          ios_backgroundColor="#E0E0E0"
          onValueChange={toggleEnable}
          value={isEnabled}
        />
      </View>

      <View style={permissaostyles.bottomsContainer}>
        <TouchableOpacity style={permissaostyles.bottom}>
          <Text style={permissaostyles.bottomText}>Ligar notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={permissaostyles.bottom2}>
          <Text style={permissaostyles.bottomText2}>Agora não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
