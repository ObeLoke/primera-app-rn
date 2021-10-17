import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>

            <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={() => {
                    if (contador < 1) {
                        setContador(0)
                    } else {
                        setContador(contador - 1)
                    }
                }}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.fabLocationBC}
                onPress={() => setContador(0)}
            >
                <View style={styles.fabCentro}>
                    <Text style={styles.fabText}>
                        Inicializar
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.fabLocationBR}
                onPress={() => setContador(contador + 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        +1
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        top: -10
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBC: {
        position: 'absolute',
        bottom: 25,
        alignSelf: 'center'
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabCentro: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
