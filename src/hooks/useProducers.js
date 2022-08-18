import { useState, useEffect } from "react";
import { loadProducers } from "../services/loadData";

const sortProducers = (list) => {
    //return list.sort((a, b) => (a.distance > b.distance) ? 1  : -1)
    return list.sort((a, b) => (a.stars < b.stars) ? 1  : -1)
}


export default function useProducers() {
    const [title, setTitle] = useState('');
    const [list, setList] = useState('');

    useEffect(() => {
        const content = loadProducers();
        setTitle(content.title);
        setList(sortProducers(content.list));
    }, []);

    return [title, list]
}