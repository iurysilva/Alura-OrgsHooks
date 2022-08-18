import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import star from '../assets/estrela.png'
import grayStar from '../assets/estrelaCinza.png'

export default function Star({onPress,disabled=true, filled, big=false}){
    const styles = stylesFunction(big);

    const getImage = () => {
        if (filled) {
            return star
        }
        return grayStar
    }

    return <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Image source={getImage()} style={styles.star}/>
    </TouchableOpacity>
}


const stylesFunction = (big) => StyleSheet.create({
    star: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
        marginRight: 2,
    },
})