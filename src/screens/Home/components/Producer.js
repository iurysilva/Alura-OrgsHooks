import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Producer({name, image, distance, stars}){
    return <View style={styles.card}>
        <Image source={image} accessibilityLabel={name} style={styles.image}/>
        <View style={styles.informations}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.distance}>{distance}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4,
    },
    image: {
        width: 45,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informations: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    }
})