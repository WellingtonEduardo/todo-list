import React, { useEffect, useState } from "react";
import "./Todo.css"
import List from './components/List'
import TodoForm from './components/TodoForm'
import Item from './components/Item'
import Modal from './components/Modal'

function Todo() {

    const [items, setItems] = useState([])

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('items'));

        if (savedItems) {
            setItems(savedItems);
        }


    }, [])


    useEffect(() => {

        localStorage.setItem('items', JSON.stringify(items));

    }, [items])



    function onAddItem(text) {

        const it = new Item(text)

        setItems([...items, it])
        onHideModal()
    }


    function onItemDelete(item) {
        const filteredItems = items.filter(it => {
            return it.id !== item.id
        })

        setItems(filteredItems)

    }


    function onDone(item) {

        const updateItems = items.map(it => {

            if (it.id === item.id) {
                it.done = !it.done
            }
            return it;
        })

        setItems(updateItems)

    }

    function onAddModal() {
        setShowModal(true)
    }


    function onHideModal() {

        setShowModal(false)

     
    }



    return (
        <div className="container">
            <header className="header">
                <h1>Todo</h1>
                <button onClick={onAddModal} className="addButton">+</button>

            </header>

            <ul>
                <List onDone={onDone} onItemDelete={onItemDelete} items={items}></List>

            </ul>


            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm  onAddItem={onAddItem}></TodoForm>
            </Modal>

        </div>



    )

}







export default Todo