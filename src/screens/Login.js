import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "../componentt/CustomTextInput";
import { screenHeight } from "../const";
import Button from "../componentt/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import Color from "../const/Color";
import { LoaderButton } from "../componentt/LoaderButton";
import { userLogin } from "../action";

const Login = ({navigation}) => {
    const [secureText, setSecureText] = useState(true)
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrmsg] = useState("")
    const [loading, setLoading] = useState(false)

    const handleLogin=async()=>{
        setErrmsg("")
        setLoading(true)
        let response = await userLogin()
        if (response.data.username == userName && response.data.password == password) {
           setLoading(false)
           navigation.navigate('Home')
        } else if(response.data.username == userName){
            setErrmsg("Password Incorrect")
            setLoading(false)
        }else{
            setErrmsg("Username Incorrect")
            setLoading(false)
        }
        setLoading(false)
    }

    return (
        <View style={styles.conatiner}>
            <View style={styles.childcontainer}>
                <CustomTextInput
                    title="Username"
                    placeholder="User Name"
                    onChangeText={(text) => setUsername(text)}
                    value={userName}
                />
                <View>
                    <CustomTextInput
                        title="Password"
                        placeholder="Password"
                        secureTextEntry={secureText}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    {secureText ?
                        <Ionicons
                            name="eye-off"
                            size={25}
                            style={styles.icon}
                            color={Color.secondary}
                            onPress={() => setSecureText(!secureText)} />
                        :
                        <Ionicons
                            name="eye"
                            size={25}
                            style={styles.icon}
                            color={Color.errorBackground}
                            onPress={() => setSecureText(!secureText)} />

                    }
                </View>
               {errMsg !="" && <Text>{errMsg}</Text> }
                {loading ? <LoaderButton title="Sign In ...  " />
                    :
                    (
                        <Button title="Sign In" press={handleLogin}/>
                    )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        height: screenHeight,
        backgroundColor: "#ffff",
        justifyContent: "center"

    },
    childcontainer: {
        marginHorizontal: 30
    },
    icon: {
        position: 'absolute',
        top: 55,
        right: 4
    }
})
export default Login;
