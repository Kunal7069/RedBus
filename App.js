import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import get_started from "./src/screen/get_started";
import login from "./src/screen/login";
import verify_otp from "./src/screen/verify_otp";
import create_account from "./src/screen/create_account";
import home from "./src/screen/home";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      > */}
        <Stack.Screen name="get_started" component={get_started} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="verify_otp" component={verify_otp} />
        <Stack.Screen name="create_account" component={create_account} />
        <Stack.Screen name="home" component={home} />
      {/* </Stack.Navigator> */}
    </NavigationContainer>
    
  );
}
