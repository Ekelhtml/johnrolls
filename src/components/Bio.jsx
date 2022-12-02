import React from 'react'
import john from './images/bio.png'
import './Bio.css'

const About = () => {
    return (
        <div className='bio' id='bio'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>John Rolls</h2>
                    <span className='line'></span>
                    <p>Pianista, músico acompañante, profesor de Música, Compositor, arreglador  y Productor Argentino nacido en Mar del Plata, Prov. De Buenos Aires en 1984. Ha estado vinculado los últimos 10 años a la Composición para Cine, teatro y video juegos.</p>
                    <p>Su formación académica es piano-clásica. Luego  incursionó en otros géneros que le dieron un amplio conocimiento y un gusto musical refinado para componer  y arreglar temas. </p>
                    <p> Sus composiciones poseen un sonido de marcada personalidad artística, definida por su formación académica; con un espíritu musical libre y creativo.</p>
                  
                </div>
            </div>
        </div>
    )
}

export default About