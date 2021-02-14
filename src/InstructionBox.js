
function InstructionBox({instructions}) {
    
    const boxStyle = {
        font: 'Roboto',
        justifyContent: 'center',
        width: '80%',
        alignSelf: "center",
        //backgroundColor: 'lightblue',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px',
        alignItems: 'center',
      }

    const headStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        //backgroundColor: 'lightblue',
    }
    
    return(
        <div style={boxStyle}>
            <h1 style={headStyle} >Recipe</h1>
            <br/>
            <h4>
                {instructions}
            </h4>
        </div>
    );
}

export default InstructionBox;