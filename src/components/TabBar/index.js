import React from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';

import {styles} from './styles'

import { AntDesign, Entypo } from '@expo/vector-icons'


export const TabBar = ({ state, descriptors, navigation, position }) => {

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>WhatsApp</Text>

                <View style={styles.iconsContainer}>
                        <AntDesign style={styles.icons} name="search1" />
                        <Entypo style={styles.icons} name="dots-three-vertical" />
                </View>
            </View>

            <View style={styles.navigatorsContainer}>
                {state.routes.map((route, index) => {

                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, ...styles.navigators, borderBottomWidth: 2, borderBottomColor: `${isFocused ? '#fff' : '#075c55'}` }}
                        >
                            <Animated.Text style={{ ...styles.navigatorsText, color: `${isFocused ? '#fff' : '#bababa'}` }}>
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

        </View>

    );
}