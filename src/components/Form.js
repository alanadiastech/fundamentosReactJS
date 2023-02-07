import React from 'react'
import { useState } from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(`Usuário cadastrado! Nome: ${name}, senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
 
    return (
       <div>
         <h1>Cadastro</h1>
         <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name"></label>
                <input 
                    type="text"  
                    id="name" 
                    placeholder="Digite seu nome:"
                    name="name" 
                    onChange={(e) => setName(e.target.value)} />
            </div> <br />
            <div>
                <label htmlFor="password"></label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite sua senha:" 
                    onChange={(e) => setPassword(e.target.value)} />
            </div> <br />
            <div>
                <input type="submit" value="Cadastrar" />
            </div>
         </form>
       </div>

    )
}

export default Form