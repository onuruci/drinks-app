import React from 'react';
import ButtonAppBar from './AppBar';
import CenteredTabs from './Tabs';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import RandomCocktail from './RandomCocktail';
import DrinkName from './DrinkName';
import DrinkById from './DrinkById';
//import axios from 'axios';




function App() {
    

    return (
      <BrowserRouter>
        <ButtonAppBar/>
        <CenteredTabs/>
        <Switch>
          <Route exact path="/" component={RandomCocktail}/>
          <Route exact path="/drinkbyname" component={DrinkName}/>
          <Route exact path="/drink/:drinkId" component={DrinkById}/>
        </Switch>
      </BrowserRouter>
        
    );
}

export default App;
