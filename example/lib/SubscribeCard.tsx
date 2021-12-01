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
  descriptionPrice?: string | number;
  price: string | number;
  timePostfix: string;
  isSelected?: boolean;
  style?: CustomStyleProp;
  containerStyle?: CustomStyleProp;
  selectedContainerStyle?: CustomStyleProp;
  outerContainerStyle?: CustomStyleProp;
  selectedOuterContainerStyle?: CustomStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  descriptionTextStyle?: CustomTextStyleProp;
  descriptionPriceTextStyle?: CustomTextStyleProp;
  selectedDescriptionPriceTextStyle?: CustomTextStyleProp;
  currencyTextStyle?: CustomTextStyleProp;
  selectedCurrencyTextStyle?: CustomTextStyleProp;
  priceTextStyle?: CustomTextStyleProp;
  selectedPriceTextStyle?: CustomTextStyleProp;
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
  descriptionPrice,
  timePostfix,
  onPress,
  isSelected,
  titleTextStyle,
  containerStyle,
  selectedContainerStyle,
  outerContainerStyle,
  selectedOuterContainerStyle,
  descriptionTextStyle,
  descriptionPriceTextStyle,
  selectedDescriptionPriceTextStyle,
  currencyTextStyle,
  selectedCurrencyTextStyle,
  priceTextStyle,
  selectedPriceTextStyle,
  timeTextStyle,
  TextComponent = Text,
  TouchableComponent = TouchableOpacity,
}) => {
  const _outerContainerStyle = isSelected
    ? [styles.selectedOuterContainer, selectedOuterContainerStyle]
    : [styles.outerContainer, outerContainerStyle];
  const _containerStyle = isSelected
    ? [styles.selectedContainer, selectedContainerStyle]
    : [styles.container, containerStyle];
  const _priceTextStyle = isSelected
    ? [styles.selectedPriceTextStyle, selectedPriceTextStyle]
    : [styles.priceTextStyle, priceTextStyle];
  const _currencyTextStyle = isSelected
    ? [styles.selectedCurrencyTextStyle, selectedCurrencyTextStyle]
    : [styles.currencyTextStyle, currencyTextStyle];
  const _descriptionPriceTextStyle = isSelected
    ? [
        styles.selectedDescriptionPriceTextStyle,
        selectedDescriptionPriceTextStyle,
      ]
    : [styles.descriptionPriceTextStyle, descriptionPriceTextStyle];

  const Content = () => (
    <View>
      <TextComponent style={[styles.titleTextStyle, titleTextStyle]}>
        {title}
      </TextComponent>
      {description && (
        <TextComponent
          style={[styles.descriptionTextStyle, descriptionTextStyle]}
        >
          <TextComponent style={_descriptionPriceTextStyle}>
            {descriptionPrice}
          </TextComponent>
          {description}
        </TextComponent>
      )}
    </View>
  );

  const Price = () => (
    <View style={styles.priceContainer}>
      <TextComponent style={_currencyTextStyle}>{currency}</TextComponent>
      <TextComponent style={_priceTextStyle}>{price}</TextComponent>
      <TextComponent style={[styles.timeTextStyle, timeTextStyle]}>
        {timePostfix}
      </TextComponent>
    </View>
  );

  return (
    <TouchableComponent style={style} onPress={onPress}>
      <View style={_outerContainerStyle}>
        <View style={[_containerStyle, style]}>
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
