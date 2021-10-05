import React from 'react';
import s from './EpisodeView.module.css';
import { NavLink } from 'react-router-dom';

const EpisodeView = (props) => {

    const sendEpiID = (e, id) => {
        e.preventDefault();
        props.getEpiID(id);
    }

    return (
        <div className={s.episode}>
            {/* <div className={s.img}>
                <img src={props.char.image} alt="" />
            </div> */}
            <div> <div className={s.title}>Name:</div> {props.epi.name}</div>
            <div><div className={s.title}>Air date:</div> {props.epi.air_date}</div>
            <div><div className={s.title}>Episode:</div> {props.epi.episode}</div>
            <br />
            <button onClick={e => sendEpiID(e, props.epi.id)}>
                <NavLink className={s.link} activeClassName={s.activeLink} 
                to={'/episode/'+ props.epi.id}> More </NavLink> 
            </button> 
        </div> //<Character chars={props.char}/>
    );
};

export default EpisodeView;

// <div>Name: {props.epis.name}</div>
//             <div>Air date: {props.epis.air_date}</div>
//             <div>Episode: {props.epis.episode}</div>