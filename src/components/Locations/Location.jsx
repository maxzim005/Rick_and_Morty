import React, { useEffect, useState } from 'react';
import axios from "axios";
import s from './Location.module.css';

const Location = (props) => {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetchLocation()
    }, [])

    async function fetchLocation() {
        const response = await axios.get(`https://rickandmortyapi.com/api/location/${props.locID}`)
        setLocation(response.data)
        console.log(props.locID)
        console.log(response)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.location}>
                {/* <div className={s.img}>
                    <img src={char.image} alt="" />
                </div> */}
                <div className={s.wrapper_text}>
                    <div><div className={s.title}>Name:</div> {location.name}</div>
                    <div><div className={s.title}>Type:</div> {location.type}</div>
                    <div><div className={s.title}>Dimension: </div>{location.dimension}</div>
                </div>
            </div>
        </div>
    );
};

export default Location;