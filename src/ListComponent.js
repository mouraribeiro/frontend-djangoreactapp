import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(props){
    const items = props.items;
    //console.log(items)
    return (
        <div class="card mb-5">
           
            <h4 class="card-tittle mt-4"><u>{props.listName}</u> </h4>
            <div > 
            <ul > 
                               
             
              {items?.map(item => <ItemComponent key={item.id} name={item.name} status={item.done} />)}
          
            
            </ul>
            </div>
        </div>
    )
}