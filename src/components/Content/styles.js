import { Dimensions, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * .1,

        flexDirection: 'row',
    },

    imageContainer: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textsContainer: {
        width: '80%',
        height: '100%',
        padding: 10,

        justifyContent: 'center',

    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    descriptionContainer: {
        justifyContent: 'flex-end',
    },

    image: {
        width: '70%',
        height: '70%',
        borderRadius: 50,
    },

    title: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 17
    },

    date: {
        color: '#525252',
        fontWeight: '500',
    },

    description: {
        marginTop: 5,
        fontSize: 12,
        color: '#5c5c5c'
    }
    
})