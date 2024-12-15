import { StyleSheet } from "react-native";

export const verificacelular = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  backButton: {
    marginTop: 25,
    marginLeft: -5,
  },

  text: {
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    marginTop: 40,
    color: "#4F4F4F",
  },

  textinput: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#d3d3d3",
    marginVertical: 12,
    fontSize: 14,
    paddingHorizontal: 15,
    marginBottom: 2,
  },

  textinput2: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#d3d3d3",
    marginVertical: 12,
    fontSize: 14,
    paddingHorizontal: 15,
    width: 300,
    marginBottom: 18,
  },

  linkcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
  },

  linktext: {
    color: "#7b2cbf",
    fontSize: 13,
    textDecorationLine: "underline",
    fontWeight: "300",
  },

  continueButton: {
    backgroundColor: "#7b2cbf",
    borderRadius: 9,
    paddingVertical: 15,
    marginTop: "auto",
    alignItems: "center",
    marginVertical: 5,
  },

  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "300",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  bottomSheet: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  modalText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "300",
  },

  closeButton: {
    backgroundColor: "#7b2cbf",
    borderRadius: 9,
    paddingVertical: 10,
    marginTop: "auto",
    alignItems: "center",
    marginVertical: 10,
    width: 300,
  },

  closeButton2: {
    backgroundColor: "#ccc",
    borderRadius: 9,
    paddingVertical: 10,
    marginTop: "auto",
    alignItems: "center",
    width: 300,
  },

  closeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "300",
  },

  closeButtonText2: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "300",
  },

  bottomSheetContainer: {},
});
