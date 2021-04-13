import React, {useState, useEffect} from "react";
import NewsList from "../components/NewsList";
import axios from 'axios';

const LineToday = (props) => {
    const [newsLists, setNewsList] = useState();

    const fetchData = async () => {
        return await fetch('https://today.line.me/id/portaljson',
        {
            mode: "no-cors",
        })
            .then(response => response.json())
            .then(data => {
                setNewsList(data)
       });
    }

    useEffect( () => {fetchData()},[]);

    return (
        <>
            <h1>Line Today</h1>
            <NewsList newsList={newsLists}/>
        </>
    );
}

export default LineToday;
