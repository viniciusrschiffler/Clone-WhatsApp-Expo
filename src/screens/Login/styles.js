import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#ededed',
    },

    imageContainer: {
        width: Dimensions.get('screen').width * .7,
        height: Dimensions.get('screen').height * .1,

        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 110,
        height: 110,
    },

    input: {
        width: Dimensions.get('screen').width * .7,
        height: Dimensions.get('screen').height * .08,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 15,
    },

    button: {
        backgroundColor: '#00FF00',
        color: '#fff',

        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 40,
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
})