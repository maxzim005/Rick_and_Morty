import React, { useEffect, useState } from 'react';
import axios from "axios";
import s from './Episode.module.css';

const Episode = (props) => {
    const [epi, setEpi] = useState([]);

    useEffect(() => {
        fetchEpi()
    }, [])

    async function fetchEpi() {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${props.epiID}`)
        setEpi(response.data)
        console.log(props.epiID)
        console.log(response)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.episode}>
                {/* <div className={s.img}>
                    <img src={char.image} alt="" />
                </div> */}
                <div className={s.wrapper_text}>
                    <div><div className={s.title}>Name:</div> {epi.name}</div>
                    <div><div className={s.title}>Air date:</div> {epi.air_date}</div>
                    <div><div className={s.title}>Episode: </div>{epi.episode}</div>
                </div>
            </div>
        </div>
    );
};

export default Episode;