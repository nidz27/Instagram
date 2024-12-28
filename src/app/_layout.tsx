// shared UI elements and shared logic betn multiple screens
// tab navigator

import { Slot, Stack, Tabs } from "expo-router";



// no matter where in the application u are always going to be inside rootlayout
// global providers


export default function RootLayout() {
    return <Stack screenOptions={{ headerShown: false }}/>;
}