import React from "react"

function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <img src={foto} alt={nome} />
            <h4>Idade: {idade}</h4>
            <h4>Profissão: {profissao}</h4>
        </div>
    )
}

export default Pessoa