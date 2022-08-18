import React, {useState} from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import Producer from "./Producer";
import useProducers from "../../../hooks/useProducers";

export default function Producers({top: Top}){
    const [title, list] = useProducers();

    const TopList = () => {
        return <>
        <Top/>
        <Text style={styles.title}>{title}</Text>
        </>
        
    }
    return <FlatList
        data={list}
        renderItem={({item}) => <Producer {...item}/>}
        keyExtractor={({name}) => name}
        ListHeaderComponent={TopList}/>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: '#464646',
    }
})