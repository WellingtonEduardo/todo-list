import React from 'react';
import ListItem from './ListItem';



function List(props) {
    return (props.items.map(item => <ListItem key={item.id} item={item} onDone={props.onDone} onItemDelete={props.onItemDelete}></ListItem>))

}


export default List

