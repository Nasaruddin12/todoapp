import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Color from '../const/Color'


export class LoaderButton extends Component {
    render() {
        return (
            
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <ActivityIndicator size={25} color="#fff"/>
                </View>
           

        )
    }
}
const styles = StyleSheet.create({
    button: {
        padding: 10,
        alignItems: 'center',
        paddingVertical: 12,
    },
    title: {
        color: '#fff',
        fontSize: 18,
    },
    container:{
        backgroundColor : Color.primary,
        marginVertical:10,
        height:50,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    }
   
})