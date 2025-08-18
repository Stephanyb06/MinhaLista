import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo1.png"

export default function Login() {
    return (
        <View style={style.container}>
            <View style={style.boxTop}> 
                <Image
                source={Logo}
                />
                <Text>Bem Vindo de volta!</Text>
            </View>
            <View style={style.boxMid} >
                <Text>Endereço de E-mail</Text>
                <TextInput />
                <Text>Senha</Text>
                <TextInput />
            </View>
            <View style={style.boxBottom}>
            </View>
        </View>
    )
}