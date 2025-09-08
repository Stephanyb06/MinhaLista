import { themas } from "../../global/themes";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textbutton:{
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold'
    },
})