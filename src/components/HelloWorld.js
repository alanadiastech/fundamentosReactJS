import React from "react"
import Frase from "./Frase"


function HelloWorld() {
    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <Frase/>
            <h2>Testando CSS</h2>
            <Frase />
            <Frase />
        </div>
    )
}

export default HelloWorld