import React from 'react';
import LocationView from './LocationView';
import s from './LocationList.module.css';

const LocationList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>List of locations</h1>
            <div className={s.locations_list}>
                {props.locations.map( location => 
                <LocationView location={location} key={location.id} getLocID={props.getLocID}/>)}
            </div>
        </div>
    );
};

export default LocationList;