import React, { useState } from "react";
import { newUserstyles } from './newUserstyles';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Register() {
  const [inputValue, setInputValue] = useState("");
  const [cpf, setInputValuecpf] = useState("");
  const [tel, setInputValuetel] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [inputValueemail, setInputValueemail] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      
        <ScrollView style={newUserstyles.container}>
          <TouchableOpacity style={newUserstyles.icon}>
            <Feather name="arrow-left" size={30} color="#7b2cbf" />
          </TouchableOpacity>

          <Text style={newUserstyles.headerText}>
            Para começarmos, precisamos de alguns dados
          </Text>

          <TextInput
            style={newUserstyles.input}
            placeholder="Nome e sobrenome"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Text style={newUserstyles.helperText}>
            Seu nome será exibido para o hóspede, nos detalhes da reserva
          </Text>

          <TextInputMask
            type={'cpf'}
            value={cpf}
            onChangeText={setInputValuecpf}
            style={newUserstyles.input}
            placeholder="CPF"
          />
          <Text style={newUserstyles.helperText}>
            O CPF deve ser o mesmo do documento de identificação
          </Text>

          <TextInputMask
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
            value={tel}
            onChangeText={setInputValuetel}
            style={newUserstyles.input}
            keyboardType="numeric"
            placeholder="Número do celular"
          />
          <Text style={newUserstyles.helperText}>
            O seu número de celular será usado para confirmar sua identidade ao acessar sua conta
          </Text>

          <TouchableOpacity
            style={newUserstyles.datePickerButton}
            onPress={() => setShow(true)}
          >
            <Text style={newUserstyles.datePickerText}>
              {date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              onChange={(event, selectedDate) => {
                setShow(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}

          <TextInput
            style={newUserstyles.input}
            placeholder="E-mail"
            value={inputValueemail}
            onChangeText={setInputValueemail}
          />

          <View style={newUserstyles.passwordContainer}>
            <TextInput
              style={newUserstyles.passwordInput}
              placeholder="Senha"
              secureTextEntry={hidePassword}
            />
            <TouchableOpacity
              style={newUserstyles.eyeIcon}
              onPress={() => setHidePassword(!hidePassword)}
            >
              <FontAwesome5
                name={hidePassword ? "eye-slash" : "eye"}
                size={20}
                color="#d3d3d3"
              />
            </TouchableOpacity>
          </View>

          <TextInput
            style={newUserstyles.input}
            placeholder="Confirmar senha"
            secureTextEntry={hidePassword}
          />

          <TouchableOpacity style={newUserstyles.continueButton}>
            <Text style={newUserstyles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>
        </ScrollView>
      
    </KeyboardAvoidingView>
  );
}