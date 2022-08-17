import React, {useEffect, useState} from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { loadProducers } from "../../../services/loadData";
import Producer from "./Producer";

export default function Producers({top: Top}){
    const [title, setTitle] = useState('');
    const [list, setList] = useState('');

    useEffect(() => {
        const content = loadProducers();
        setTitle(content.title);
        setList(content.list);
    }, []);

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