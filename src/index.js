//Import react and reactDOM 

import React from 'react';
import ReactDOM from 'react-dom';

//Create react components

const App= () =>{

    const label='Enter Name'


    return <div>
        <label class='name'>{label}</label>
        <input id='name' type='text'/>
        <button style={{color:'white',backgroundColor:'blue'}}>Submit</button>
    </div>;
    
};


//taking reac compnents and isplay it in the browser

ReactDOM.render(
    <App />,
    document.querySelector('#root'));