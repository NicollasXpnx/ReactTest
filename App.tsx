import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Formulario2 from "./src/pages/Formulário 2";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Formulario2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
