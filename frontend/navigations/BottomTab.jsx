import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import Home from '../screens/Home';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  backgroundColor: 'white',
  borderTopWidth: 0,
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor='black'
      tabBarHideKeyBoard={true}
      headerShown={false}
      inactiveColor="gray"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={focused ? 'gray' : 'black'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search"}
              color={focused ? 'gray' : 'black'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "opencart" : "opencart"}
              color={focused ? 'gray' : 'black'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? 'gray' : 'black'}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})