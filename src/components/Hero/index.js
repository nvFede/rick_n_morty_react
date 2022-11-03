import React, { Children } from 'react';
import fondo1 from '../../assets/fondo.webp'
import fondo2 from '../../assets/fondo2.webp'
import fondo3 from '../../assets/fondo3.png'
import fondo4 from '../../assets/fondo4.jpg'



const Hero = ({Children}) => {

    

    return (
        <div className='w-screen flex items-center justify-center h-96 bg-cover bg-center'  
            style={{backgroundImage:`url(${fondo1})`}}>
            <h1 className='text-5xl text-white bg-opacity-30 bg-slate-900 p-2'>{Children}</h1>
        </div>
    );
};

export default Hero;