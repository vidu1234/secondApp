import { useNavigation } from "@react-navigation/core";
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Forget = ()=>{

    const navigation=useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>
                
                <View style={{padding:10}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center', marginTop: 150}}>
                            <Image source={require('../../assets/images/logo.png')} resizeMode={'contain'} style={{width:'100%',height:60}}/>
                        </View>
                    </View>
                    
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Your email address" placeholderTextColor = "#9B9B9B"/>
                    </View>
                    
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Send Reset Link</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                            <Text style={{color:"#4287f5",textAlign:'center',fontSize:16,fontWeight:'bold'}}>Already Have Account? Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },defaultBg:{
        width:'100%',
        height:120
    },formInput:{
        marginTop:10,
        padding:10,
       
    },textInput:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10,
        color: '#000000'
    },defaultButton:{
        padding:15,
        backgroundColor:'#14b53f',
        borderRadius:10,
    }
});

export default Forget;