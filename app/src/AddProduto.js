import React, { useState } from "react";

export default function AddProduto () {

    const [nome, setNome] = useState('Digite o nome do Produto')
    return (
        <>
        <h1>Adicionar Produto</h1>

        <label>  </label>
        <input type='text'></input>
        </>
    );
}