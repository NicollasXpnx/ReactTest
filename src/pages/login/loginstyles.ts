import { StyleSheet } from "react-native";

export const loginstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  backBotton: {
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

  textinput: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#d3d3d3",
    marginVertical: 12,
    fontSize: 16,
    paddingHorizontal: 15,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCC",
  },

  text: {
    marginHorizontal: 10,
    color: "#CCC",
    fontSize: 14,
    fontWeight: "500",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  continuebutton: {
    backgroundColor: "#7b2cbf",
    borderRadius: 9,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 5,
  },

  continuetext: {
    color: "#FFF",
    fontSize: 16,
  },

  socialmidia: {
    marginTop: 3,
  },

  htext: {
    marginLeft: 65,
    fontSize: 17,
    color: "#7b2cbf",
    fontWeight: "400",
  },

  iconStyle: {
    marginLeft: 45,
    position: "absolute",
  },

  socialmidiaButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7b2cbf",
    borderRadius: 9,
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginVertical: 6,
  },
});
