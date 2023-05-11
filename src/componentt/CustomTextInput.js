import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
const CustomTextInput = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput
                style={styles.input}
                defaultValue={props.defaultValue}
                placeholderTextColor={'#b3a8a8'}
                editable={props.editable}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </View>
    );

}

export default CustomTextInput;

const styles = StyleSheet.create({

    input: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        marginVertical: 8,
        height: 50,
        width: '100%',
        paddingLeft: 10,
        // backgroundColor:'black'
        color:"black",
    },
    placeholder:{
        color:"black"
    },
    container:{
        marginVertical:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold"
    }
})