import React from 'react';
import Card from './Card'

function DoneImag(props) {

    if (props.done) {

        return <img src="./assets/off.png" alt="done"></img>

    }
    else {

        return <img src="./assets/on.png" alt="undone"></img>
    }
}


function ListItem(props) {
    return (<li  >
        <Card className={props.item.done ? "done item" : "item"}>
            <p className='text'>{props.item.text}</p>
            <div className='buttons'>
                <button onClick={() => { props.onDone(props.item) }}><DoneImag done={props.item.done}></DoneImag></button>
                <button onClick={() => { props.onItemDelete(props.item) }}><img src="./assets/lixeira.png" alt="delete"></img></button>
            </div>
        </Card>
    </li>)
}

export default ListItem

