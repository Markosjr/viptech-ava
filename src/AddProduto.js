import React, { useState } from "react";
import Header from "./componentes/Header";

export default function AddProduto () {


    const [nome, setNome] = useState('Digite o nome do Produto')
    const [marca, setMarca] = useState('Digite a marca do Produto')
    const [valor, setValor] = useState(' R$ 000.00')
  
    return (
        
        
        <div>
        
            <Header/>
            
            <p>Home </p>
            <p> Adicionar Produto</p>
            
        <div class="container">
             <fieldset class="fieldset-border">
             <legend class="legend-border">Nome do Produto</legend>
             </fieldset>
        </div>

        <div className="container">
                <fieldset class="fieldset-border">
                <legend class="legend-border">Marca do Produto</legend>
                </fieldset>
        </div>
            
        <div className="container">
            <fieldset class="fieldset-border">
             <legend class="legend-border">Valor</legend>
             <input min='0' type="text" value={valor} onChange={(event) => setValor (event.target.value)} />
             </fieldset>
                
        </div>

            <div className="container">
                <fieldset class="fieldset-border">
                <legend class="legend-border">Cor</legend>
                <input type="search" value={cor} onChange={(event)=> setCor (event.target.value)} />
                </fieldset>
               
            </div>

            <div className="container">
            <fieldset class="fieldset-border">
            <legend class="legend-border">Data</legend>
            </fieldset>

            </div>

             {/* <button {''}> Adicionar Produto </button>  */}
        </div>
    );
}