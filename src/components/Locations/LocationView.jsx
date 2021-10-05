import React from 'react';
import s from './LocationView.module.css';
import { NavLink } from 'react-router-dom';

const LocationView = (props) => {

    const sendLocID = (e, id) => {
        e.preventDefault();
        props.getLocID(id);
    }

    return (
        <div className={s.location}>
            {/* <div className={s.img}>
                <img src={props.char.image} alt="" />
            </div> */}
            <div> <div className={s.title}>Name:</div> {props.location.name}</div>
            <div><div className={s.title}>Type:</div> {props.location.type}</div>
            <div><div className={s.title}>Dimension:</div> {props.location.dimension}</div>
            <br />
            <button onClick={e => sendLocID(e, props.location.id)}>
                <NavLink className={s.link} activeClassName={s.activeLink} 
                to={'/location/'+ props.location.id}> More </NavLink> 
            </button> 
        </div> //<Character chars={props.char}/>
    );
};

export default LocationView;

{/* <div>Name: {props.locations.name}</div>
            <div>Type: {props.locations.type}</div>
            <div>Dimension: {props.locations.dimension}</div> */}