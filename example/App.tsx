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
      <SubscribeCard onPress={() => {}} />
    </SafeAreaView>
  );
};

export default App;
