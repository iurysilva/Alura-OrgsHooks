import React, {useState} from "react";
import { StyleSheet, View} from "react-native";
import Star from "./Star";

export default function Stars({
    amount: oldAmount,
    editable = false,
    big = false,
}){
    const [amount, setAmount] = useState(oldAmount);
    
    const RenderStars = () => {
        const listStars = []
        for (let i = 0; i<5; i++){
            listStars.push(
                <Star onPress={() => setAmount(i+1)} disabled={!editable} filled={i<amount} big={big} key={i}/>
            )
        }
        return listStars
    }

    return <View style={styles.stars}>
        <RenderStars/>
    </View>
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
    }
})