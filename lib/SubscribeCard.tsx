import * as React from "react";
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

export interface ISubscribeCardProps {
  title: string;
  price: string | number;
  timePostfix: string;
  description?: string;
  currency: string;
  descriptionPrice?: string | number;
  isSelected?: boolean;
  discountText?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  selectedContainerStyle?: StyleProp<ViewStyle>;
  discountContainerStyle?: StyleProp<ViewStyle>;
  outerContainerStyle?: StyleProp<ViewStyle>;
  selectedOuterContainerStyle?: StyleProp<ViewStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  descriptionTextStyle?: StyleProp<TextStyle>;
  descriptionPriceTextStyle?: StyleProp<TextStyle>;
  selectedDescriptionPriceTextStyle?: StyleProp<TextStyle>;
  currencyTextStyle?: StyleProp<TextStyle>;
  selectedCurrencyTextStyle?: StyleProp<TextStyle>;
  priceTextStyle?: StyleProp<TextStyle>;
  selectedPriceTextStyle?: StyleProp<TextStyle>;
  timeTextStyle?: StyleProp<TextStyle>;
  discountTextStyle?: StyleProp<TextStyle>;
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
  discountText,
  containerStyle,
  selectedContainerStyle,
  discountContainerStyle,
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
  discountTextStyle,
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

  const renderContent = () => (
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

  const renderPrice = () => (
    <View style={styles.priceContainer}>
      <TextComponent style={_currencyTextStyle}>{currency}</TextComponent>
      <TextComponent style={_priceTextStyle}>{price}</TextComponent>
      <TextComponent style={[styles.timeTextStyle, timeTextStyle]}>
        {timePostfix}
      </TextComponent>
    </View>
  );

  const renderDiscount = () =>
    discountText ? (
      <View style={[styles.discountContainer, discountContainerStyle]}>
        <TextComponent style={[styles.discountTextStyle, discountTextStyle]}>
          {discountText}
        </TextComponent>
      </View>
    ) : null;

  const renderContainer = () => (
    <View style={_outerContainerStyle}>
      <View style={[_containerStyle, style]}>
        <View style={styles.containerGlue}>
          {renderContent()}
          {renderPrice()}
        </View>
      </View>
    </View>
  );

  return (
    <TouchableComponent style={style} onPress={onPress}>
      {renderDiscount()}
      {renderContainer()}
    </TouchableComponent>
  );
};

export default SubscribeCard;
