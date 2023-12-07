import './header.css';
import React from 'react';

const Header = () => {
  return (
    <header>
        <div className="search-box">
            <input type="text" placeholder="Pesquisar carro"/>
        </div>
        <div className="button-container">
            <button className='material-button'>Criar carro novo</button>
        </div>
    </header>
  );
}

export default Header;