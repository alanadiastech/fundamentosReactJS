
import React from 'react'
import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <h2>Usando Fragments</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Fiat" ano_lancamento={1964} />
                <Item ano_lancamento={1999} />
                <Item marca="Renault" />
                <Item />
            </ul>
        </>
    )
}

export default List