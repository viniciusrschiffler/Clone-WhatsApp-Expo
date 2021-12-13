import React from 'react'
import { Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Chat } from '../screens/Chat'
import { Status } from '../screens/Status'
import { Calls } from '../screens/Calls'

import { TabBar } from '../components/TabBar'

const Tab = createMaterialTopTabNavigator()

export const MyTabs = () => {
    return (
        <Tab.Navigator
            tabBar={props => <TabBar {...props} />}   
            >
                
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Status" component={Status} />
            <Tab.Screen name="Calls" component={Calls} />
        </Tab.Navigator>
    )
}