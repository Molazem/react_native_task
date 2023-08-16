import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    // TODO: Perform login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button
        title="Login"
        onPress={onLogin}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    width: 300,
    height: 40,
    borderRadius: 5,
  },
});

export default LoginPage;
