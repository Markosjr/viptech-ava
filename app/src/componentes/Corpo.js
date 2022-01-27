import React from 'react'
import Cam1 from './imgs/IM1.png'
import Cam2 from './imgs/IM2.png'
import Cam3 from './imgs/IM3.png'


export default function Corpo() {

    const botaoProduto ={
        backgroundColor: '#0F4C81',
        float: 'right',
        width: '291px',
        height: '64px',
        right: '261px',
        top: '164px',
        borderRadius: '12px',
        fontFamily: 'Raleway'




        
        
    }

    return (
        <section>

        <p style={{fontFamily: 'Raleway', fontSize: '2em', padding:'10px', marginLeft:'2em'}}> Produtos </p> 

        <button style={botaoProduto}> + Adicionar Produto </button>

        <div>
        <div id="d1"><img src={Cam1}></img>Câmera interna Inteligente Wi-fi Full HD iM4 </div>
        <br></br>
        <div id='d2'><img src={Cam2}></img> Câmera interna Inteligente Wi-fi Full HD iM3</div>
        <br></br>
        <div id='d3'><img src={Cam3}></img> Cãmera DS-2CD 258G2-I</div>

        </div>
        

        </section>
    )
}