import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height * .15,
        backgroundColor: '#075c55',
        shadowOpacity: 100,
    },

    titleContainer: {
        width: '100%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 10,
    },

    navigatorsContainer: {
        position: 'absolute',
        top: '75%',
        flexDirection: 'row',
    },

    navigators: {
    },

    navigatorsText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },

    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    },

    iconsContainer: {
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'flex-end'
    },

    icons: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 20,

    },

})