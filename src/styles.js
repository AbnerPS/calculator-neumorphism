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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },

      neuMenu: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        flexWrap: "wrap",
        shadowRadius: 3,
        borderRadius: 20,
        backgroundColor: '#F2F3F7',
        width: 340,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
      },

      neuButtonMenu: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        shadowRadius: 7,
        borderRadius: 40,
        backgroundColor: '#F2F3F7',
        width: 40,
        height: 40,
      },

      borderButtonMenu: {
        marginEnd: 15,
        shadowRadius: 7,
        borderRadius: 50,
        backgroundColor: '#FF686B',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },

      title: {
        fontSize: 20,
        textTransform: "uppercase",
      },

      operation: {
        paddingTop: 40,
        alignItems:"flex-end"
      },

      operatingText: {
        color: "#91a1bd",
        fontSize: 20
      },

      resultText: {
        fontSize: 50
      },

      buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: 10
      },

      buttonNumber: {
        marginTop: 20,
        marginEnd: 10,
        shadowRadius: 4,
        borderRadius: 60,
        backgroundColor: "#F2F3F7",
        width: 60,
        height: 60,
        justifyContent: "center",
        alignContent: "center"
      },

      buttonNumberZero: {
        marginTop: 20,
        marginEnd: 10,
        shadowRadius: 4,
        borderRadius: 60,
        backgroundColor: "#F2F3F7",
        width: 150,
        height: 60,
        justifyContent: "center",
        alignContent: "center"
      },

        neuButtonOp: {
          shadowRadius: 7,
          borderRadius: 50,
          backgroundColor: '#FF686B',
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center'
        },

          borderButtonOp: {
            marginEnd: 10,
            marginTop: 20,
            shadowRadius: 4,
            borderRadius: 60,
            backgroundColor: '#F2F3F7',
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          },

          neuButtonFunc: {
            shadowRadius: 7,
            borderRadius: 50,
            backgroundColor: '#555',
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center'
          },

      numbers: {
        backgroundColor: "#F2F3F7",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#e2ecfd",
        borderWidth: 1,
    },

    numberText: {
      fontSize: 30,
      textAlign: "center"
    },

    FuncText: {
      fontSize: 28,
      textAlign: "center",
      color: "#F2F3F7"
    },
})