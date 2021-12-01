import React from "react";
import { SafeAreaView } from "react-native";
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
      <SubscribeCard
        title="Unlimited plan"
        description="$ 124 billed Unlimited plan"
        currency="$"
        price={8}
        timePostfix="/mo"
        onPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default App;
