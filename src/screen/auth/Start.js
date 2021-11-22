import { useNavigation } from "@react-navigation/core";
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Start = ()=>{

    const naviation=useNavigation();

    return (
        
        <SafeAreaView style={styles.container}>
            <ScrollView>

                    <View>
                        <Text style={styles.Heading}>WELCOME!</Text>
                    </View>
                
                   
                    <View >
                        <TouchableOpacity onPress={()=>{ naviation.navigate("Forget") }} style={styles.Button}>
                            <Text style={{textAlign:'center',fontSize:20,fontWeight: '700', color:'#ffff'}}>START</Text>
                        </TouchableOpacity>
                        
                    </View>
                    

                    
                    
                
            </ScrollView>
        </SafeAreaView>
     
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',


    },Button:{
        flexDirection: "row",
        width: 320,
        height: 50,
        padding:10,
        backgroundColor:'#191919',
        borderRadius:30,
        marginTop: 550,
        alignItems: "center",
        justifyContent: "center"   
    },
    Heading:{
        color: '#ffff',
        textAlign: "center",
        fontSize: 32,
        fontWeight: '800',
        marginTop: 50

    }
    
});

export default Start;