import { Tabs } from "expo-router";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
      name="index" 
      options={{ headerShown: false,
        
      }}
      
      
      />



      <Tabs.Screen name="conssfiguracoes" options={{ headerShown: false }}/>
      <Tabs.Screen name="list" options={{ headerShown: false }}/>
    </Tabs>
  );
}
