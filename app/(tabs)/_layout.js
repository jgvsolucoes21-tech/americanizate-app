import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
        }}
      />
      <Tabs.Screen
        name="recursos"
        options={{
          title: "Recursos",
        }}
      />
      <Tabs.Screen
        name="legal"
        options={{
          title: "Guía Legal",
        }}
      />
    </Tabs>
  );
}
