import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(props){
    const items = props.items;
    //console.log(items)
    return (
       
            <div className='box' > 
               <div className='inner'>
               <h3>{props.listName} </h3>
            
            
                           
         
            {items?.map(item => <ItemComponent key={item.id} name={item.name} status={item.done} />)}
      
        
            
               </div>
            </div>
       
    )
}