import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const MobileAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  const confirmCode = async () => {
    try {
      const result = await confirm.confirm(code);
      console.log('User signed in successfully!', result);

      // Save user data to Firestore under REDBUS_TEST collection
      await firestore().collection('REDBUS_TEST').doc("TERST").set({
        NAME: name,
        AGE: parseInt(age, 10),
      });

      console.log('User data added to Firestore!');
      // You can add further logic here, like navigating to a new screen
    } catch (error) {
      console.error('Invalid code or error saving user data:', error);
    }
  };

  if (!confirm) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number (e.g., +1234567890)"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="number-pad"
        />
        <Button title="Send Verification Code" onPress={signInWithPhoneNumber} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Verification Code"
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
      />
      <Button title="Confirm Code" onPress={confirmCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default MobileAuth;
