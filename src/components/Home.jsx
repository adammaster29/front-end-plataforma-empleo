import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='padre_home'>
            <Navbar/>
            <div className="hijo_home">
                 <div className="contenedor_buscador">
                    <h1>Ahora es el momento de cambiar</h1>
                    <h2>Los empleos mas atractivos</h2>
                    <div className="contenedor_input_home">
                        <input type="text" placeholder='Cargo o palabra clave' />
                        <button>Buscar empleos</button>
                    </div>
                 </div>
            </div>
            
        </div>
    );
};

export default Home;