import React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SubscribeCard.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface ISubscribeCardProps {
  title: string;
  description?: string;
  currency: string;
  price: string | number;
  timePostfix: string;
  isSelected?: boolean;
  style?: CustomStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  descriptionTextStyle?: CustomTextStyleProp;
  currencyTextStyle?: CustomTextStyleProp;
  priceTextStyle?: CustomTextStyleProp;
  timeTextStyle?: CustomTextStyleProp;
  TextComponent?: any;
  TouchableComponent?: any;
  onPress: () => void;
}

const SubscribeCard: React.FC<ISubscribeCardProps> = ({
  style,
  title,
  description,
  currency,
  price,
  timePostfix,
  onPress,
  titleTextStyle,
  isSelected,
  descriptionTextStyle,
  currencyTextStyle,
  priceTextStyle,
  timeTextStyle,
  TextComponent = Text,
  TouchableComponent = TouchableOpacity,
}) => {
  const Content = () => (
    <View>
      <TextComponent style={[styles.titleTextStyle, titleTextStyle]}>
        {title}
      </TextComponent>
      {description && (
        <TextComponent
          style={[styles.descriptionTextStyle, descriptionTextStyle]}
        >
          {description}
        </TextComponent>
      )}
    </View>
  );

  const Price = () => (
    <View style={styles.priceContainer}>
      <TextComponent style={[styles.currencyTextStyle, currencyTextStyle]}>
        {currency}
      </TextComponent>
      <TextComponent style={[styles.priceTextStyle, priceTextStyle]}>
        {price}
      </TextComponent>
      <TextComponent style={[styles.timeTextStyle, timeTextStyle]}>
        {timePostfix}
      </TextComponent>
    </View>
  );

  return (
    <TouchableComponent onPress={onPress}>
      <View style={styles.outerContainer}>
        <View style={[styles.container, style]}>
          <View style={styles.containerGlue}>
            <Content />
            <Price />
          </View>
        </View>
      </View>
    </TouchableComponent>
  );
};

export default SubscribeCard;
