import { useNavigation } from "@react-navigation/core";
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = ()=>{

    const naviation=useNavigation();

    return (
        <SafeAreaView >
            <ScrollView >
                
                <View style={styles.container}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center', marginTop: 165}}>
                            <Image source={require('../../assets/images/logo.png')} resizeMode={'contain'} style={{width:'100%',height:60}}/>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Your email address" placeholderTextColor = "#747475"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} placeholderTextColor = "#747475"/>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>{ naviation.navigate("Forget") }}>
                            <Text style={{color:"#9fa9a3",textAlign:'right',fontSize:16,fontWeight:'400'}}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <Text style={{textAlign:'center', color: '#fff'}}>or</Text>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <TouchableOpacity style={{marginRight:10}}>
                                <Image source={require('../../assets/images/google.png')} style={{width:40,height:40,borderRadius:1000}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:10}}>
                                <Image source={require('../../assets/images/facebook.png')} style={{width:40,height:40,borderRadius:1000}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>naviation.navigate("Register")}>
                            <Text style={{color:"#9fa9a3",textAlign:'center',fontSize:16,fontWeight:'bold'}}>Need Account ? Register now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:10, 
        backgroundColor:'#1B191D',
        width: '100%',
        height: '100%'
        

    
    },formInput:{
        marginTop:10,
        padding:10,
    },textInput:{
        padding:10,
        fontSize:16,
        borderWidth: 0.2,
        borderColor:"#a7a7a7",
        borderRadius:5,
        color: '#fff',
        
        
    },defaultButton:{
        padding:15,
        backgroundColor:'#4287f5',
        borderRadius:10,
    }
});

export default Login;