import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        backgroundColor: "#F2F3F7",
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10
    },

    header: {
    },

    content: {
        borderTopColor: "#000",
        marginTop: 16
    },
    
    title: {
        textAlign: "center",
        fontSize: 20
    },

    operation: {
        color: "#91a1bd",
        fontSize: 20
    },

    result: {
        fontSize: 20
    }
})