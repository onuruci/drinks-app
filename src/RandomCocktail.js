import React, { useState, useEffect } from 'react';
import CocktailPage from './CocktailPage';
import InstructionBox from './InstructionBox';



function RandomCocktail () {
    const [item, setItem] = useState('');
    const [drinkImage, setDrinkImage] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState('');

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    };

    async function DrinkChange() {
      setItem("Loading..");
      try {
        let res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        let result = await res.json();
        console.log(result);
        await sleep(500);
        // Below two states changes perfectly
        setItem(result["drinks"][0]["strDrink"]);
        setDrinkImage(result["drinks"][0]["strDrinkThumb"]);
        console.log(result["drinks"][0]["strInstructions"]);
        setInstructions(result["drinks"][0]["strInstructions"]);
        let i = 1;
        let t = [];
        while(result["drinks"][0]["strIngredient"+i.toString()] !== null)
        {
          t.push({id: i, dr: result["drinks"][0]["strIngredient"+i.toString()], ms:result["drinks"][0]["strMeasure"+i.toString()] });
          i++;
        }
        //when it comes to changing the array state nothing happens
        setIngredients([...t]);
        console.log(t);
        //logs all the ingredients
        //logs []
      } catch (error) {
        setItem('Error');
      }  
    };

    

    useEffect(() => {
      DrinkChange();
    },[]);
  
    return(
      <div>
        <CocktailPage item={item} drinkImage={drinkImage} ingredients={ingredients}/>
        <InstructionBox instructions={instructions}/>
      </div>
      
    );  
}

export default RandomCocktail;