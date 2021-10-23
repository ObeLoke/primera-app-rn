import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';

export class TareaScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cajaMorada}>

                </View>
                <View style={styles.cajaNaranja}>

                </View>
                <View style={styles.cajaCeleste}>

                </View>
            </View>
        )
    }
}

export default TareaScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        // justifyContent: 'space-between',
        // flexDirection: 'row'
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        width: 100,
        // flex: 2,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    cajaCeleste: {
        width: 100,
        // flex: 4,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    }
});