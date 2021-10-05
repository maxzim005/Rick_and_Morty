import React from 'react';
import EpisodeView from './EpisodeView';
import s from './EpisodeList.module.css';

const EpisodeList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>List of episodes</h1>
            <div className={s.episodes_list}>
            {props.epis.map( epi => 
                <EpisodeView epi={epi} key={epi.id} getEpiID={props.getEpiID}/>)}
            </div>
        </div>
    );
};

export default EpisodeList;