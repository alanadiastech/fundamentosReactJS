import React from "react"

function SeuNome({setNome}) {
    
    return (
        <div>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Seu nome" onChange={(e) => setNome(e.target.value)} />
        </div>
    )
}

export default SeuNome