import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

const Login = ()=>{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Text style={{
                alignSelf:"center",
                fontSize:30,
                fontWeight: "bold",
                margin:10,
            }}>LOGIN</Text>
            <TextInput
                style={{  margin:10,
                height:40, borderColor:'gray',borderWidth:1}}
                placeholder="userName"
                onChangeText={(text)=> setUserName(text)}
                value={userName}
            />
            
             <TextInput
                style={{  margin:10,
                height:40, borderColor:'gray',borderWidth:1}}
                placeholder="Password"
                onChangeText={(text)=> setPassword(text)}
                value={password}
            />
            <Button
                color="red"
                title="Đăng Nhập"
                onPress={()=> alert("Xin chào userName "+ userName )}
                
            />
        </View>
    )
}

export default Login;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center",
            padding:10
           
        }

    }
)