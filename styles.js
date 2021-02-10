import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 10,
        justifyContent: 'center'
    },

    background: {
        backgroundColor: '#EDFDFC'
    },

    item: {
        fontSize: 20,
        color: '#4A0D67',
        textAlign: 'center'
    },

    proposal: {
        borderWidth: 3,
        borderColor: '#33FF9C'
    },

    textModal: {
        fontSize: 25,
        textAlign: 'center'
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevation: 5
    },

    buttonContainer: {
        marginTop: 5,
        borderRadius: 25,
        padding: 5,
        elevation: 2,
        width: 150
    },

    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
});

export default styles
