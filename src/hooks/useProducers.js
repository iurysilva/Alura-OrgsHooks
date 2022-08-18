import { useState, useEffect } from "react";
import { loadProducers } from "../services/loadData";

export default function useProducers() {
    const [title, setTitle] = useState('');
    const [list, setList] = useState('');

    useEffect(() => {
        const content = loadProducers();
        setTitle(content.title);
        setList(content.list);
    }, []);

    return [title, list]
}