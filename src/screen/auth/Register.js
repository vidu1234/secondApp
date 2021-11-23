import { useNavigation } from "@react-navigation/core";
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Register = ()=>{

    const navigation=useNavigation();

    return (
        <SafeAreaView >
            <ScrollView >
                
                <View style={{padding:10, backgroundColor:'#1B191D'}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center', marginTop: 100}}>
                            <Image source={require('../../assets/images/logo.png')} resizeMode={'contain'} style={{width:'100%',height:60}}/>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Your Full Name" placeholderTextColor = "#9B9B9B"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Your email address" placeholderTextColor = "#9B9B9B"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} placeholderTextColor = "#9B9B9B"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true} placeholderTextColor = "#9B9B9B"/>
                    </View>
                   
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                            <Text style={{color:"#4287f5",textAlign:'center',fontSize:16,fontWeight:'bold', marginBottom: 80}}>Already Have Account ? Login</Text>
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
    
    },formInput:{
        marginTop:10,
        padding:10,
        placeholderTextColor: '#00000'
        
    },textInput:{
        padding:10,
        fontSize:16,
        borderWidth:0.2,
        borderColor:"#a7a7a7",
        borderRadius:5,
        color: '#000000',
        
    },defaultButton:{
        padding:15,
        backgroundColor:'#14b53f',
        borderRadius:10,
    }
});

export default Register;