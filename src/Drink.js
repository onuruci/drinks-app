import React from 'react';
import './drinks.css';
import { Link } from 'react-router-dom';

function Drink({drinkId, name, drinkImage}) {

    const picturestyle = {
        alignSelf: "center",
        height: "350px",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: '12px',
        width: '350px',
        fontsize: 'auto',
      };
    
    const LinkStyle= {
      textDecoration: 'none',
    }
  
    const headpicturestyle = {
        width: '250px',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
      }

    const boxStyle = {
      marginLeft: '5%',
      marginTop: '15px',
      paddingLeft: 'auto',
      paddingRight:'auto',
    }
    
    let url = '/drink/' + drinkId;

    return(
      <Link to={url} style={LinkStyle}>
        <div className="drinkbox" style={boxStyle}>
            <h1>{name}</h1>
            <div style={picturestyle}>
              <img src={drinkImage} alt={name} style={headpicturestyle}/>
            </div>
        </div>
      </Link>
    );
};

export default Drink;