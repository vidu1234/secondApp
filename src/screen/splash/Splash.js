import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Image, View,Text } from "react-native";

const Splash = ()=>{
    
    const [isGo,setIsGo]=useState(true);
    const Navigation=useNavigation();


    useEffect(()=>{
    if(isGo == true){
        setTimeout(()=>{
            Navigation.navigate("Login");
            setIsGo(false);
        },3000);
    }
});

    


    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#000000"}}>
            <Image source={require('../../assets/images/logo.png')} style={{width:140,height:80}}/>
           
        </View>
    )
}

export default Splash;