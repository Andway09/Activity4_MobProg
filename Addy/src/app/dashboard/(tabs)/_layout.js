import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1DA1F2', // Twitter blue for active items
        tabBarInactiveTintColor: '#8899A6', // Light gray for inactive items
        tabBarActiveBackgroundColor: '#192734', // Slightly darker background for active items
        tabBarStyle: {
          backgroundColor: '#15202B', // Twitter dark background
          borderTopWidth: 0, // No border for a cleaner look
          margin: 10,
          borderRadius: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          color: '#FFF', // White text for labels
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? '#1DA1F2' : '#8899A6'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={24}
              color={focused ? '#1DA1F2' : '#8899A6'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={24}
              color={focused ? '#1DA1F2' : '#8899A6'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
