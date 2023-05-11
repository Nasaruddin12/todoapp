import { StyleSheet, Text, View } from "react-native";
import Color from "../const/Color";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Nav = () => {
    return (
        <View style={styles.conatianer}>
            <FontAwesome5 name="bars" size={30} color={"#fff"} />
            <Text style={styles.title}>Hello, Welcome to TODO</Text>
        </View>
    );
}
export default Nav;

const styles = StyleSheet.create({
    conatianer: {
        height: 60,
        backgroundColor: Color.primary,
        padding:10,
        flexDirection:"row"
    },
    title:{
        color: Color.tabBar,
        // padding:10,
        fontSize:22,
        left:20,
        fontWeight:"800"
    }
})