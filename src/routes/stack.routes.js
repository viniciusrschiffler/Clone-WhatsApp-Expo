import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../screens/Login'
import { MyTabs } from './tabs.routes'

const Stack = createNativeStackNavigator()

export const MyStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="WhatsApp" component={MyTabs} />
    </Stack.Navigator>
)