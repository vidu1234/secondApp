import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screen/Home";

import Register from "../screen/auth/Register";
import Forgot from "../screen/auth/Forget";
import Splash from "../screen/splash/Splash";
import Start from "../screen/auth/Start";
import Login from "../screen/auth/Login";
const Stack = createNativeStackNavigator();

const AppRotuer = ()=>{
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
            <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown:false}} name="Start" component={Start} />
            <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
            <Stack.Screen options={{headerShown:false}} name="Forget" component={Forgot} />
            <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppRotuer;