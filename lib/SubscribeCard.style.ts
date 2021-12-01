import { ViewStyle, Dimensions, StyleSheet, TextStyle } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  selectedContainer: ViewStyle;
  containerGlue: ViewStyle;
  outerContainer: ViewStyle;
  selectedOuterContainer: ViewStyle;
  titleTextStyle: TextStyle;
  descriptionTextStyle: TextStyle;
  priceContainer: ViewStyle;
  currencyTextStyle: TextStyle;
  selectedCurrencyTextStyle: TextStyle;
  priceTextStyle: TextStyle;
  selectedPriceTextStyle: TextStyle;
  timeTextStyle: TextStyle;
  selectedDescriptionPriceTextStyle: TextStyle;
  descriptionPriceTextStyle: TextStyle;
  discountContainer: ViewStyle;
  discountTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  outerContainer: {
    height: 85,
    width: ScreenWidth * 0.9,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#363636",
    backgroundColor: "#363636",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedOuterContainer: {
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
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 12,
    justifyContent: "center",
  },
  selectedContainer: {
    height: 78,
    width: ScreenWidth * 0.88,
    paddingLeft: 16,
    paddingRight: 16,
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
    color: "#805bfa",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  selectedCurrencyTextStyle: {
    marginTop: 8,
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  priceTextStyle: {
    fontSize: 36,
    color: "#805bfa",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  selectedPriceTextStyle: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  timeTextStyle: {
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: "500",
    marginTop: 20,
    left: 3,
  },
  descriptionPriceTextStyle: {
    color: "#805bfa",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  selectedDescriptionPriceTextStyle: {
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  discountContainer: {
    top: 12,
    zIndex: 9,
    width: 75,
    height: 25,
    marginRight: 24,
    borderRadius: 8,
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  discountTextStyle: {
    fontSize: 12,
    color: "#805bfa",
    fontWeight: "900",
    fontFamily: "Roboto",
  },
});
