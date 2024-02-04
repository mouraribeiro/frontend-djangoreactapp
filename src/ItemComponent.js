import React from 'react';

export default function ItemComponent(props){
    const status = props.status;
    return <div className="inner"id="b">
                
                    <h4>{ props.name }</h4> 
                    <h6>Status:</h6> 
                     {status ? <p>Completo</p> :  <p>Incompleto</p>}
                </div>
       
       
    }
