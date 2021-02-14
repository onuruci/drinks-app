import React from 'react';
import Drink from './Drink';


function MainCard({drinks}) {
    let Rend;

    const drinkstyle = {
        alignSelf: "center",
        height: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
      };

    if(drinks !== "" && drinks !== null)
    {
        console.log(drinks[0]["strDrink"]);
        Rend = <div style={drinkstyle}> {drinks.map((i) => {
            return <Drink key={i["idDrink"]} drinkId={i["idDrink"]} name={i["strDrink"]} drinkImage={i["strDrinkThumb"]}/>;
        })} </div>;
    }
    else
    {
        console.log('main');
        console.log(drinks);
        Rend = <h1>No Drink Found</h1>;
    }
    
    return(
        <div>
            {Rend}
        </div>
    );
}

export default MainCard;