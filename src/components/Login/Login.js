import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const usernameInputHandler = enteredText => {
    setEnteredUsername(enteredText);
  };

  const passwordInputHandler = enteredText => {
    setEnteredPassword(enteredText);
  };

  const loginHandler = () => {
    console.log(enteredUsername, enteredPassword);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={usernameInputHandler}
        value={enteredUsername}
      />

      <TextInput
        placeholder="Password"
        onChangeText={passwordInputHandler}
        value={enteredPassword}
      />
      <Button title="Login" onPress={loginHandler} />
    </View>
  );
}
