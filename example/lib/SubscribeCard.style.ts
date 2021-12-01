import { ViewStyle, Dimensions, StyleSheet, TextStyle } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  containerGlue: ViewStyle;
  outerContainer: ViewStyle;
  titleTextStyle: TextStyle;
  descriptionTextStyle: TextStyle;
  priceContainer: ViewStyle;
  currencyTextStyle: TextStyle;
  priceTextStyle: TextStyle;
  timeTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  outerContainer: {
    height: 85,
    width: ScreenWidth * 0.9,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#805bfa",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: 78,
    width: ScreenWidth * 0.88,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 12,
    backgroundColor: "#805bfa",
    justifyContent: "center",
  },
  containerGlue: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleTextStyle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  descriptionTextStyle: {
    color: "#fff",
    marginTop: 5,
    fontSize: 13,
    fontFamily: "Roboto",
  },
  priceContainer: {
    marginLeft: "auto",
    flexDirection: "row",
  },
  currencyTextStyle: {
    marginTop: 8,
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  priceTextStyle: {
    fontSize: 42,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  timeTextStyle: {
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: "500",
    marginTop: 24,
    left: 3,
  },
});
