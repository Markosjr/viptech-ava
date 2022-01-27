import React from 'react'
import './App.css'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'
import EditarProduto from './EditarProduto'
import AddProduto from './AddProduto'
import Carrinho from './Carrinho'

export default function App () {
  return (
    <>
        <Header/>
        <Corpo/>

        <Dados
        Add=''
        Alterar='' 
        Excluir=''/>

    </>

  )
}