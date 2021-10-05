import React, { useEffect, useState } from 'react';
import axios from "axios";
import s from './Character.module.css';
import '../../index.css';

const Character = (props) => {
    const [char, setChar] = useState([]);

    useEffect(() => {
        fetchChar()
    }, [])

    async function fetchChar() {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${props.charID}`)
        setChar(response.data)
        console.log(char)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.character}>
                <div className={s.img}>
                    <img src={char.image} alt="" />
                </div>
                <div className={s.wrapper_text}>
                    <div><div className={s.title}>Name:</div> {char.name}</div>
                    <div><div className={s.title}>Status:</div> {char.status}</div>
                    <div><div className={s.title}>Gender: </div>{char.gender}</div>
                </div>
            </div>
        </div>
    );
};

export default Character;
