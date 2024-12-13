import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginE from "./src/pages/email/loginEmail";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginE />
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
