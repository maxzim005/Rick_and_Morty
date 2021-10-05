import React, { useEffect, useState } from 'react';
import CharactersList from './CharactersList';
import axios from "axios";
// import s from './Characters.module.css';
import '../../index.css';
import Pagination from '@material-ui/core/Pagination';
import TextField from '@material-ui/core/TextField';

const Characters = (props) => {
    const [chars, setChars] = useState([]);
    const [pagesAmount, setPagesAmount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [value, setValue] = useState('');
    const [aaa, setAaa] = useState('');

    useEffect(() => {
        fetchChars()
    }, [currentPage, value])

    async function fetchChars() {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${value}`)
            // .catch(function (error) {
            //     if (error.response) {
            //         console.log(error.response.data);
            //     }
            // });
            // if (!error.response.data) {
            setChars(response.data.results)
            setPagesAmount(response.data.info.pages)
            setAaa('')
        } catch (error) {
            if (error.response) {
                setAaa('There is nothing for your request!');
                setChars([]);
                setPagesAmount(0);
            }

        }
        // }

    }
    let pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i);
    }
    const handleChange = (e, value) => {
        setCurrentPage(value);
        // console.log(currentPage);
    };

    return (
        <div>
            <div className='pl-6 mt-3 ml-3 w-2/12 bg-gray-200 border-2 border-gray-800 rounded-full'>
                <TextField id="outlined-basic" value={value} label="Search" variant="standard" onChange={e =>
                    setValue(e.target.value)} />
            </div>

            <div className='flex justify-center mb-3'>
                <Pagination count={pagesAmount} page={currentPage} onChange={handleChange} />
            </div>
            <CharactersList chars={chars} getCharID={props.getCharID} />

            <h1 className=''>{aaa}</h1>

            <div className='flex justify-center my-3'>
                <Pagination count={pagesAmount} page={currentPage} onChange={handleChange} />
            </div>
        </div>
    );
};

export default Characters;