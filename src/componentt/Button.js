import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import Color from "../const/Color";
const Button = (props) => (
    <View style={styles.container}>
        <TouchableOpacity
            disabled={props.disabled}
            style={styles.button}
            onPress={props.press}
        >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    </View>
)
export default Button;

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
        marginVertical:10
    }
   
})