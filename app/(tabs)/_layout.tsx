import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

const AppLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false,  }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
