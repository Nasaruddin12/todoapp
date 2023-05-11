import { StyleSheet, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Color from "../const/Color";
import CustomTextInput from "./CustomTextInput";
const AddButton = () => {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <CustomTextInput />
            </View>
            <Feather name="plus" size={50}
                style={styles.button}
                color={"#fff"} />

        </View>
    );
}
export default AddButton;
const styles = StyleSheet.create({
    button: {
        backgroundColor: Color.secondary,
        width:50,
        height:50,
        borderRadius:50,
        left:20,
        marginTop:20
    },
    container: {
        marginHorizontal: 15,
        flexDirection:'row',
        alignItems:"center",
        // position:"absolute",
        marginTop:550
    },
    input:{
        width:'80%'
    }
})