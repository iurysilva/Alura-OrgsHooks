import React, {useState} from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity} from "react-native";
import star from '../assets/estrela.png'
import grayStar from '../assets/estrelaCinza.png'

export default function Stars({
    amount: oldAmount,
    editable = true,
    big = false,
}){
    const [amount, setAmount] = useState(oldAmount);
    const styles = stylesFunction(big);
    
    const getImage = (index) => {
        if (index < amount) {
            return star
        }
        return grayStar
    }
    

    const RenderStars = () => {
        const listStars = []
        for (let i = 0; i<5; i++){
            listStars.push(
                <TouchableOpacity key={i} onPress={() => {(setAmount(i + 1))}} disabled={!editable}>
                    <Image source={getImage(i)} style={styles.star}/>
                </TouchableOpacity>
            )
        }
        return listStars
    }

    return <View style={styles.stars}>
        <RenderStars/>
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