import React, { useState } from "react";
import Header from "./componentes/Header";

export default function AddProduto () {


    const [nome, setNome] = useState('Digite o nome do Produto')
    const [marca, setMarca] = useState('Digite a marca do Produto')
    const [valor, setValor] = useState(' R$ 000.00')
    const [cor, setCor] = useState('Branco', 'Preto')
    return (
        
        
        <div>
        
            <Header/>
            <p>Home </p>
            <p> Adicionar Produto</p>
            <div className="NomeProduto">
                Nome do Produto:
                <input type="text" value={nome} onChange={(event) => setNome(event.target.value) } />
            </div>

            <div className="MarcaProduto">
                Marca:
                <input type="text" value={marca} onChange={(event) => setMarca(event.target.value)} />
            </div>
            
            <div className="ValorProduto">
                Valor:
                <input min='0' type="text" value={valor} onChange={(event) => setValor (event.target.value)} />
            </div>

            <div className="CorProduto">
                Cor:
                <input type="search" value={cor} onChange={(event)=> setCor (event.target.value)} />
            </div>

            {/* <button {''}> Adicionar Produto </button> */}
        </div>
    );
}