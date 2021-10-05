import React, { useEffect, useState } from 'react';
import LocationList from './LocationList';
import axios from "axios";
import s from './Locations.module.css';

const Locations = (props) => {
    const [locations, setLocations] = useState([]);
    const [pagesAmount, setPagesAmount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        fetchLocations()
    },[currentPage])

    async function fetchLocations() {
        const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${currentPage}`)
        setLocations(response.data.results)
        setPagesAmount(response.data.info.pages)
    }
    let pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pages}>
                {pages.map(p => {
                    return <button className='' onClick={(e) => { setCurrentPage(p); console.log(currentPage) }}>{p}</button>
                })}
            </div>
            <LocationList locations={locations} getLocID={props.getLocID} />
            <div className={s.pages}>
                {pages.map(p => {
                    return <button className='' onClick={(e) => { setCurrentPage(p); console.log(currentPage) }}>{p}</button>
                })}
            </div>
            <div className={s.space}></div>
        </div>
    );
};

export default Locations;