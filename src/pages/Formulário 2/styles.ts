import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    fontSize: 19.9,
    fontWeight: "300",
    textAlign: "left",
    marginVertical: 5,
    color: "#4F4F4F",
    marginTop: 40,
  },
  dropdown: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  dropdownIcon: {
    marginLeft: 10,
  },

  dropdownText: {
    fontSize: 16,
    color: "#828282",
  },

  button: {
    backgroundColor: "#7b2cbf",
    borderRadius: 9,
    paddingVertical: 15,
    marginTop: "auto",
    alignItems: "center",
    width: 330,
    marginLeft: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "300",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  menu: {
    backgroundColor: "#ffffff",
    borderRadius: 4,
    padding: 10,
    width: 200,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  menuItemText: {
    fontSize: 16,
    color: "#333",
  },
});
