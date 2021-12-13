import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { MyStack } from './stack.routes'

export const Routes = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}