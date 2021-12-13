import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import {styles} from './styles';

import wppIcon from '../../assets/images/wppIcon.png'

export const Login = () => {

    const navigator = useNavigation()

    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>

                <Image style={styles.image} source={wppIcon} />
            </View>

            <View>
                <TextInput style={styles.input} placeholder='Digite seu login' />
                <TextInput style={styles.input} secureTextEntry placeholder='Digite seu Senha' />
            </View>

            <TouchableOpacity
                style={[styles.input, styles.button]}
                onPress={() => navigator.navigate('WhatsApp')}
            >
                <Text style={styles.buttonText} >ENTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}