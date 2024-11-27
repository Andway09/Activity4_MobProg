import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.textInput}
          mode="outlined"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.textInput}
          mode="outlined"
        />
        <Button
          mode="contained"
          onPress={() => console.log('Sign In pressed')}
          style={styles.signInButton}
          labelStyle={styles.signInButtonText}
        >
          Sign In
        </Button>
      
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 16,
    color: '#000',
  },
  body: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  signInButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    marginTop: 10,
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#0056D2',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: 10,
  },
});
