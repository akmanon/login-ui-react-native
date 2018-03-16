import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView>
            <View style={{ flex: 1, flexDirection: 'column', padding: 50 }}>
                    <Text style={style.head} >
                        Lines
                        {'\n\n'}
                        Welcome Back!
                        <Text style={{color:'#8a95a5'}}>Sign in to continue to Lines.{'\n'} </Text>
                    </Text>
                    <TextInput placeholder='Email' underlineColorAndroid = "#58bce8" style={{fontSize: 15,}}></TextInput>
                    <TextInput placeholder='Password'underlineColorAndroid = "#58bce8" style={{fontSize: 15,}}></TextInput>
                    <View style={{flex: 1, justifyContent: 'flex-end'}} >
                        <TouchableOpacity>
                            <Text style={{fontSize:30, color: '#58bce8',}}> 
                                {'\n'}Login{'\n\n'}
                            </Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:15, color:'#8a95a5',}}>
                            Don't have an account? 
                            <Text style={{color: '#546E7A'}}>
                                Sign up{'\n\n\n'}UI Developed By Ashish Kumar.
                            </Text>
                        </Text>
                    </View>
            </View>
            </ScrollView>
        )
    }
}


const style = StyleSheet.create({
    head: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
    }
});
