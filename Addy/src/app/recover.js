import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, Text } from 'react-native-paper';

const Recover = () => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    // Handle the recovery logic here (e.g., sending the recovery link)
    console.log('Recovery link sent to:', email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recover Password</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          style={styles.textInput}
          mode="outlined"
        />
        <Button
          mode="contained"
          onPress={handleRecovery}
          style={styles.recoveryButton}
          labelStyle={styles.recoveryButtonText}
        >
          Send Recovery Link
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Recover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
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
  recoveryButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
  },
  recoveryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
