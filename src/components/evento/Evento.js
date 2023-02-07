import Button from "./Button"

function Evento({numero}) {
    function ativarEvento() {
        alert(`Primeiro evento ativado! ${numero}`)
    }

    function segundoEvento() {
        alert("Segundo evento ativado!")
    }

    return (
        <div>
            <p>Clique para disparar um evento!</p>
            <Button event={ativarEvento} text="Primeiro evento!" /> <br /><br />
            <Button event={segundoEvento} text="Segundo evento!" /> <br /><br />
            <button onClick={ativarEvento}>Ativar</button>
        </div>
    )
}

export default Evento