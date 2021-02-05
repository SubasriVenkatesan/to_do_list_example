import React from 'react';
import './List_item.css';

function List_item(props) {
    const items = props.items;
    const listItem = items.map(item =>
        {
            return <div className ='list' key ="item.key">
                  <p>{item.text}</p>  
            </div>
        })
    return (
        <h1>{listItem}</h1>
    );
}

export default List_item;
