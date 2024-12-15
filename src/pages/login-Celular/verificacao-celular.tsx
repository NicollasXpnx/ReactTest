import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { verificacelular } from "./verifica-celularstyles";

export default function VerificarCelular() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleOpenPress = (contentType: React.SetStateAction<string>) => {
    setModalContent(contentType);
    setModalVisible(true);
  };

  const handleClosePress = () => {
    if (keyboardVisible) {
      Keyboard.dismiss();
      setKeyboardVisible(false);
    } else {
      setModalVisible(false);
    }
  };

  const handleKeyboardDidShow = () => {
    setKeyboardVisible(true);
  };

  const handleKeyboardDidHide = () => {
    setKeyboardVisible(false);
  };

  React.useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      "keyboardDidShow",
      handleKeyboardDidShow
    );
    const keyboardHideListener = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardDidHide
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <View style={verificacelular.container}>
      <TouchableOpacity style={verificacelular.backButton} onPress={() => {}}>
        <Feather name="arrow-left" size={30} color="#7b2cbf" />
      </TouchableOpacity>

      <Text style={verificacelular.text}>
        Enviamos um código de 6 dígitos para o número informado
      </Text>

      <TextInput
        style={verificacelular.textinput}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Digite o código"
      />

      <View style={verificacelular.linkcontainer}>
        <TouchableOpacity onPress={() => handleOpenPress("incorrectNumber")}>
          <Text style={verificacelular.linktext}>Número está incorreto</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleOpenPress("noCodeReceived")}>
          <Text style={verificacelular.linktext}>Não recebi o código</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={verificacelular.continueButton}>
        <Text style={verificacelular.continueButtonText}>Verificar código</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleClosePress}
      >
        <TouchableWithoutFeedback onPress={handleClosePress}>
          <View style={verificacelular.modalOverlay}>
            <KeyboardAvoidingView
              behavior="padding"
              style={verificacelular.bottomSheetContainer}
            >
              <View style={verificacelular.bottomSheet}>
                {modalContent === "incorrectNumber" ? (
                  <>
                    <Text style={verificacelular.modalText}>
                      Por favor, digite o número correto
                    </Text>
                    <TextInput
                      style={verificacelular.textinput2}
                      value={inputValue2}
                      onChangeText={setInputValue2}
                      placeholder="Digite o número"
                    />
                    <TouchableOpacity
                      style={verificacelular.closeButton}
                      onPress={() => {}}
                    >
                      <Text style={verificacelular.closeButtonText}>
                        Continuar
                      </Text>
                    </TouchableOpacity>
                  </>
                ) : modalContent === "noCodeReceived" ? (
                  <>
                    <Text style={verificacelular.modalText}>
                      Clique no botão abaixo para receber um novo código de
                      verificação, ou cancele a operação
                    </Text>
                    <TouchableOpacity
                      style={verificacelular.closeButton}
                      onPress={() => {}}
                    >
                      <Text style={verificacelular.closeButtonText}>
                        Reenviar código
                      </Text>
                    </TouchableOpacity>
                  </>
                ) : null}

                {modalContent === "incorrectNumber" ? (
                  <TouchableOpacity
                    style={verificacelular.closeButton2}
                    onPress={handleClosePress}
                  >
                    <Text style={verificacelular.closeButtonText}>Voltar</Text>
                  </TouchableOpacity>
                ) : modalContent === "noCodeReceived" ? (
                  <TouchableOpacity
                    style={verificacelular.closeButton2}
                    onPress={handleClosePress}
                  >
                    <Text style={verificacelular.closeButtonText}>
                      Cancelar
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
