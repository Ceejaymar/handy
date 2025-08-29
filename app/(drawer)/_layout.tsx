import { Drawer } from "expo-router/drawer";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerActiveTintColor: "#f2a310",
          headerTintColor: "#333",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Manage locations",
          }}
        />
        <Drawer.Screen
          name="location"
          options={{
            title: "Location",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
