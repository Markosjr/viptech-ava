import React from 'react'
import Cam1 from './imgs/IM1.png'
import Cam2 from './imgs/IM2.png'
import Cam3 from './imgs/IM3.png'


export default function Corpo() {

    const botaoProduto ={
        backgroundColor: '#0F4C81',
        
    }

    return (
        <section>

        <p style={{fontFamily: 'Raleway', fontSize: '2em'}}> Produtos </p> 

        <button style={botaoProduto}> + Adicionar Produto </button>

        <div>
        <div id="d1"><img src={Cam1}></img></div>
        <div id='d2'><img src={Cam2}></img></div>
        <div id='d3'><img src={Cam3}></img></div>

        </div>
        

        </section>
    )
}