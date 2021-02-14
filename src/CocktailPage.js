import React from 'react';

function CocktailPage({item, drinkImage, ingredients}) {
    const mystyle = {
        font: 'Roboto',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      alignSelf: "center",
      textAlign: 'center',
      };
  
      const picturestyle = {
        alignSelf: "center",
        height: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'block',
        margin: 'auto',
        width: '100%',
      };
  
      const headpicturestyle = {
        width: '25%',
        height: 'auto'
      }
    const listStyle = {
      font: 'Roboto',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      alignSelf: "center",
      textAlign: 'center',
      display: 'flex',
      backgroundColor: 'lightblue',
      marginLeft: 'auto',
      marginRight: 'auto',
      flexWrap: 'wrap',
    }

    const itemStyle = {
      width : '50%',
    }

    return(
        <div>
            <div style={mystyle}>
              <h1 style={mystyle}>
                  {item}
              </h1>
            </div>
            <div style={picturestyle}>
              <img src={drinkImage} alt={item} style={headpicturestyle}/>
            </div>
            <br/>
            <br/>
            <div style={listStyle}>
                {ingredients.map(i => {
                  return <div style={itemStyle} key={i['id']}><h4>{i['ms']}</h4>    <h2>{i['dr']}</h2></div>
                })}
            </div>
        </div>
    );
}

export default CocktailPage;