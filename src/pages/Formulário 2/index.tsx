import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

export default function Formulario2() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Tipo de imóvel");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => {}}>
        <Icon name="arrow-left" size={30} color="#7b2cbf" />
      </TouchableOpacity>

      <Text style={styles.title}>Agora é hora de dar mais detalhes</Text>

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setMenuVisible(true)}
      >
        <Text style={styles.dropdownText}>{selectedOption}</Text>
        <Icon
          name="chevron-down"
          size={16}
          color="#828282"
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View
          style={styles.modalOverlay}
          onTouchEnd={() => setMenuVisible(false)}
        >
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setSelectedOption("Apartamento");
                setMenuVisible(false);
              }}
            >
              <Text style={styles.menuItemText}>Apartamento</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setSelectedOption("Casa");
                setMenuVisible(false);
              }}
            >
              <Text style={styles.menuItemText}>Casa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setSelectedOption("Terreno");
                setMenuVisible(false);
              }}
            >
              <Text style={styles.menuItemText}>Terreno</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}
