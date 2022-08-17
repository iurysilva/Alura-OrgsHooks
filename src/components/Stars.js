import React from "react";
import { Text, Image, StyleSheet, View} from "react-native";
import star from '../assets/estrela.png'
import grayStar from '../assets/estrelaCinza.png'

export default function Stars({
    amount: oldQuantity,
    editable = false,
    big = false,
}){
    const styles = stylesFunction(big);
    return <View style={styles.stars}>
        <Image source={star} style={styles.star}/>
        <Image source={star} style={styles.star}/>
    </View>
}

const stylesFunction = (big) => StyleSheet.create({
    star: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
        marginRight: 2,
    },
    stars: {
        flexDirection: 'row',
    }
})