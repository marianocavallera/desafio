import React from 'react';

import Header from './Header.js';
import Carousel from './Carousel';

//const defaultCars = [
//  {text:'Renault Kangoo', precio: $ 15000, img:},
//  {text:'Renault Alaskan', precio: $ 20000, img:},
//  {text:'Renault Logan', precio: $ 12000, img:},
//];


function App() {
  return (
    <React.Fragment>
      <div>
        <Header/>
        
        <Carousel   key={car.text} 
                    text={car.text}
                    precio={todo.precio}/>

      
      </div>
    </React.Fragment>
    
  );
}

export default App;
