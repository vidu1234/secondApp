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
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#7466FF"}}>
            <Image source={require('../../assets/images/logo.png')} style={{width:170,height:70}}/>
            <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold'}}>My First App</Text>
        </View>
    )
}

export default Splash;