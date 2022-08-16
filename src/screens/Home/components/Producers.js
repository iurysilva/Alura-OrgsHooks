import React, {useEffect} from "react";
import { Text } from "react-native";
import { loadProducers } from "../../../services/loadData";

export default function Producers(){
    useEffect(() => {
        const content = loadProducers();
        console.log(content)
    }, []);

    return <Text>Producers</Text>
}