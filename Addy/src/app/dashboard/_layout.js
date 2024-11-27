import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#15202B', // Twitter dark background
            width: 240,
          },
          headerStyle: {
            backgroundColor: '#1DA1F2', // Twitter blue header
          },
          headerTintColor: '#FFF', // White text for the header
          drawerActiveTintColor: '#1DA1F2', // Twitter blue for active items
          drawerInactiveTintColor: '#8899A6', // Gray for inactive items
          drawerActiveBackgroundColor: '#192734', // Slightly darker blue for active items
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                size={20}
                color={focused ? '#1DA1F2' : '#8899A6'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'cog' : 'cog-outline'}
                size={20}
                color={focused ? '#1DA1F2' : '#8899A6'}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
