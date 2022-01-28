import React from 'react'
import Cam1 from './imgs/IM1.png'
import Cam2 from './imgs/IM2.png'
import Cam3 from './imgs/IM3.png'


export default function Corpo() {

    const teste = ['teste','teste2']

    return (
        <section>
        {teste.map(it => <>{it}</>)}
        <p style={{fontFamily: 'Raleway', fontSize: '2', padding:'10px', marginLeft:'2em'}}> Produtos </p> 

        <button className='botaoProduto'><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0016 32C7.16818 31.9903 0.00970076 24.8325 0 16V15.68C0.175908 6.88727 7.41608 -0.115241 16.2107 0.00143715C25.0053 0.118115 32.0571 7.31024 31.9997 16.1046C31.9422 24.8989 24.797 31.9982 16.0016 32ZM8.0008 14.4V17.6H14.4014V24H17.6018V17.6H24.0024V14.4H17.6018V8.00002H14.4014V14.4H8.0008Z" fill="white"/>
</svg>
        Adicionar Produto </button>

        {/* <div>
        <div id="d1"><img src={Cam1}></img>Câmera interna Inteligente Wi-fi Full HD iM4 </div>
        <br></br>
        <div id='d2'><img src={Cam2}></img> Câmera interna Inteligente Wi-fi Full HD iM3</div>
        <br></br>
        <div id='d3'><img src={Cam3}></img> Cãmera DS-2CD 258G2-I</div>

        </div> */}
        

        </section>
    )
}