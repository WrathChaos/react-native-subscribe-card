import React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SubscribeCard.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ISubscribeCardProps {
  style?: CustomStyleProp;
  TextComponent?: any;
  TouchableComponent?: any;
  onPress: () => void;
}

const SubscribeCard: React.FC<ISubscribeCardProps> = ({
  style,
  onPress,
  TextComponent = Text,
  TouchableComponent = TouchableOpacity,
}) => {
  return (
    <TouchableComponent onPress={onPress}>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <TextComponent
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontWeight: "700",
                  fontFamily: "Roboto",
                }}
              >
                Unlimited plan
              </TextComponent>
              <TextComponent
                style={{
                  color: "#fff",
                  marginTop: 5,
                  fontSize: 13,
                  fontFamily: "Roboto",
                }}
              >
                $ 124 billed Unlimited plan
              </TextComponent>
            </View>
            <View style={{ marginLeft: "auto", flexDirection: "row" }}>
              <TextComponent
                style={{
                  marginTop: 8,
                  color: "#fff",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                $
              </TextComponent>
              <TextComponent
                style={{
                  fontSize: 42,
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                8
              </TextComponent>
              <TextComponent
                style={{
                  color: "#fff",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  marginTop: 24,
                  left: 3,
                }}
              >
                /mo
              </TextComponent>
            </View>
          </View>
        </View>
      </View>
    </TouchableComponent>
  );
};

export default SubscribeCard;
