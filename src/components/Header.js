import React from 'react';
import MiniCart from './MiniCart'

function Header() {

    return (
            <>
                <div>logomarca</div>
                <input type="search"/>
                <button>Buscar</button>
                <MiniCart/>
            </>
    );
}

export default Header;