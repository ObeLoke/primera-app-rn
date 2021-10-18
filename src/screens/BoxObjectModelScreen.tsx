import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={
            styles.container
        }>
            <Text
                style={
                    styles.title
                }>
                Bienvenido a Netflix
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginHorizontal: 20,
        fontSize: 21,
        borderWidth: 10
    }
});