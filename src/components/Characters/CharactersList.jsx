import React from 'react';
import CharacterView from './CharacterView';
import s from './CharactersList.module.css';

const CharactersList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}} className='text-5xl bold'>List of characters</h1>
            <div className={s.characters_list}>
            {props.chars.map( char => 
                <CharacterView char={char} key={char.id} getCharID={props.getCharID}/>)}
            </div>
        </div>
    );
};

export default CharactersList;