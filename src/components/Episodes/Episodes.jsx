import React, { useEffect, useState } from 'react';
import EpisodeList from './EpisodeList';
import axios from "axios";
import s from './Episodes.module.css';

const Episodes = (props) => {
    const [epis, setEpis] = useState([]);
    const [pagesAmount, setPagesAmount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        fetchEpis()
    },[currentPage])

    async function fetchEpis() {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
        setEpis(response.data.results)
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
            <EpisodeList epis={epis} getEpiID={props.getEpiID} />
            <div className={s.pages}>
                {pages.map(p => {
                    return <button className='' onClick={(e) => { setCurrentPage(p); console.log(currentPage) }}>{p}</button>
                })}
            </div>
            <div className={s.space}></div>
        </div>
    );
};
export default Episodes;