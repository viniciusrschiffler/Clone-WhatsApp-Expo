import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles'

export const Content = ({ imageUri, title, description, date, status = false, wasSeen = false, proprieties }) => {
    
    const [statusWasSeen, setStatusWasSeen] = useState(wasSeen)

    const statusImageBorder = {
        borderWidth: 3,
        borderColor: statusWasSeen ? '#666666' : '#075c55'
    }

    function handleClick() {
        if (!statusWasSeen) {
            setStatusWasSeen(true)
        }
        
    }

    function handleCallProprieties() {

        if (proprieties.answered) {
            var arrowColor = '#57f035'
        }else {
            var arrowColor = '#de3333'
        }

        if (proprieties.received) {
            var arrowName = 'arrow-bottom-left'
        }else {
            var arrowName = 'arrow-top-right'
        }

        return <MaterialCommunityIcons name={arrowName} size={18} color={arrowColor} />
    }

    function handleCallType() {

        if (proprieties.type == 'call') {

            return <MaterialIcons name="call" size={24} color="#075c55" />
        }else {

            return <MaterialIcons name="video-call" size={24} color="#075c55" />
        }
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={handleClick}
        >
            <View style={styles.imageContainer}>

                <Image style={[styles.image, status ? statusImageBorder : null]} source={{
                    uri: imageUri,
                }} />

            </View>

            <View style={styles.textsContainer}>

                <View style={styles.titleContainer}>

                    <Text style={styles.title} >{title}</Text>
                    <Text style={styles.date} >{proprieties ? handleCallType() : date }</Text>

                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{proprieties ? handleCallProprieties() : null } {description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}