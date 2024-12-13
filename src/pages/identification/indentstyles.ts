import { StyleSheet } from "react-native";

export const indentstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  backButton: {
    marginTop: 25,
    marginLeft: -5,
  },

  title: {
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    marginTop: 40,
    color: "#4F4F4F",
  },

  button: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    marginBottom: -70,
    elevation: 2,
    marginTop: 80,
    shadowColor: "#000",
    shadowOffset: { width: 2.5, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },

  htext: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "200",
  },
});
