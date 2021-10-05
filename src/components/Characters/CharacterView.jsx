import React, { useState } from 'react';
import s from './CharacterView.module.css';
import { NavLink } from 'react-router-dom';

const CharacterView = (props) => {

    const sendCharID = (e, id) => {
        e.preventDefault();
        props.getCharID(id);
    }

    return (
        <div className={s.character + ' bg-gradient-to-r from-green-400 to-indigo-300 rounded-lg shadow-2xl font-semibold'}>
            <div className={s.img} onClick={e => sendCharID(e, props.char.id)}>
                <NavLink className={s.link} activeClassName={s.activeLink}
                    to={'/character/' + props.char.id}>
                    <img src={props.char.image} alt="" className='rounded-lg border-2 border-gray-700' />
                </NavLink>
            </div>
            <div className={s.title}>Name:</div> <div>{props.char.name}</div>
            <div className={s.title}>Status:</div> <div style={props.char.status === 'Alive' ? { color: 'green' } : { color: 'red' }}>{props.char.status}</div>
            <div className={s.title}>Gender:</div><div> {props.char.gender}</div>
            <br />
            <button onClick={e => sendCharID(e, props.char.id)}>
                <NavLink className={s.link + ' text-gray-100 text-2xl shadow-xl hover:text-green-900'} activeClassName={s.activeLink}
                    to={'/character/' + props.char.id}> More </NavLink>
            </button>
        </div> //<Character chars={props.char}/>
    );
};

export default CharacterView;

    //const [charId, setCharID] = useState(0);
