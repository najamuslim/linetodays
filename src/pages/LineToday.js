import React, {useState, useEffect} from "react";
import NewsList from "../components/NewsList";
import axios from 'axios';

const LineToday = (props) => {
    const [newsLists, setNewsList] = useState();

    const fetchData = async () => {
        return await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                setNewsList(data)
       });
    }

    useEffect( () => {fetchData()},[]);

    return (
        <>
            <h1>Line Today</h1>
            <NewsList newsList={countryList}/>
        </>
    );
}

export default LineToday;
