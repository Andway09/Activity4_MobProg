import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const settingsOptions = [
  { icon: 'bell', label: 'Notifications' },
  { icon: 'shield-lock', label: 'Privacy Settings' },
  { icon: 'account', label: 'Account Settings' },
  { icon: 'help-circle', label: 'Help & Support' },
  { icon: 'translate', label: 'Language Preferences' },
  { icon: 'palette', label: 'Theme Settings' },
  { icon: 'database', label: 'Data Usage' },
  { icon: 'message-outline', label: 'Feedback' },
];

const Settings = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/'); // Redirect to the login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.settingsList}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.option}>
            <MaterialCommunityIcons
              name={option.icon}
              size={24}
              color="#8899A6" // Muted icon color
              style={styles.icon}
            />
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MaterialCommunityIcons name="logout" size={24} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202B', // Dark mode background
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text
    marginBottom: 20,
  },
  settingsList: {
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#38444D', // Subtle divider
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#E1E8ED', // Light gray text
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3B30', // Red logout button
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 'auto', // Stick to the bottom
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});
