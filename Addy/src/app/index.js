import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back!</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={styles.textInput}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={!isShowPassword}
          style={styles.textInput}
          right={
            <TextInput.Icon
              onPress={() => setIsShowPassword(!isShowPassword)}
              icon={isShowPassword ? 'eye' : 'eye-off'}
            />
          }
        />
        <Button
          mode="contained"
          style={styles.loginButton}
          labelStyle={styles.loginButtonText}
          onPress={() => router.replace('dashboard')}
        >
          Login
        </Button>
      </View>
      <View style={styles.footer}>
        <Button
          mode="text"
          onPress={() => router.push('recover')}
          labelStyle={styles.linkText}
        >
          Forgot your password?
        </Button>
        <Button
          mode="text"
          onPress={() => router.push('register')}
          labelStyle={styles.linkText}
        >
          Don't have an account? Sign Up
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  form: {
    marginBottom: 30,
  },
  textInput: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: '#000',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
  },
  linkText: {
    color: '#0056D2',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
