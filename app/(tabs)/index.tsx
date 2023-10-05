import { useRouter } from "expo-router";
import React from "react";
import { Pressable, View, Text } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.replace("Login");
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          width: 100,
          backgroundColor: "red",
        }}
      ><Text>Oi</Text></View>
    </Pressable>
  );
}
