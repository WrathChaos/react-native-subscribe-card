import { ViewStyle, Dimensions, StyleSheet } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  outerContainer: ViewStyle;
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
});
