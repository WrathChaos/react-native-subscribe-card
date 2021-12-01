import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import SubscribeCard from "./lib/SubscribeCard";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#202020",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar barStyle="light-content" />
      <View style={{ height: "45%", justifyContent: "space-evenly" }}>
        <SubscribeCard
          title="Unlimited plan"
          descriptionPrice="$124"
          description=" billed Unlimited plan"
          currency="$"
          price={8}
          timePostfix="/mo"
          isSelected
          discountText="Save 90%"
          onPress={() => {}}
        />
        <SubscribeCard
          title="1 year plan"
          descriptionPrice="$224"
          description=" billed every year"
          currency="$"
          price={12}
          timePostfix="/mo"
          onPress={() => {}}
        />
        <SubscribeCard
          title="Montlyh Plan"
          currency="$"
          price={19}
          timePostfix="/mo"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
