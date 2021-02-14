import React, { useState, useEffect } from 'react';
import MainCard from './MainCard';
import SearchIcon from '@material-ui/icons/Search';


function DrinkName() {
    const[search, setSearch] = useState('');
    const[drinks, setDrinks] = useState('');

    const mystyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3%',
        font: 'Roboto',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      alignSelf: "center",
      textAlign: 'center',
      };

    const[page, setPage] = useState( <div style={mystyle}>
        <h1>Search for Drinks</h1>
    </div> );

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    async function getDrinks (value){
        try {
            setPage( <div style={mystyle} ><h1>Loading..</h1></div> );
            console.log(search);
            let res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+value);
            let result = await res.json();
            console.log(result);
            await sleep(300);
            setDrinks(result['drinks']);
            console.log(drinks);
            setPage(<MainCard drinks={result['drinks']}/>);
        } catch(error) {
            console.log(error);
            setDrinks('')
            setPage( <div style={mystyle} ><h1>No Drink Found</h1></div> );
        }
    };

    function handleChange(e) {
        setSearch(e.target.value);
    };

    async function handleClick() {
        console.log(search);
        await getDrinks(search);
        setSearch("");
    };

    useEffect(() => {
        getDrinks('a')
    },[]);

    return(
        <div>
            <div style={mystyle}>
                <input type="text" value={search} onChange={handleChange} placeholder="Search"/>
                <SearchIcon onClick={handleClick}>
                    <input type="submit"/>
                </SearchIcon>
            </div>
            {page}
        </div>
    );
}

export default DrinkName;