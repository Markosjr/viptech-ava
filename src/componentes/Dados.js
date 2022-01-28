import React from 'react'


export default function Dados (props) {
    return (
        <div className='botao'>
        
        <button>  Adicionar ao Carrinho {props.Add}  </button>
        <button>  Alterar {props.Alterar}  </button>
        <button> Excluir  {props.Excluir} </button>

        </div>
    )
}