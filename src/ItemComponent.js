import React from 'react';

export default function ItemComponent(props){
    const status = props.status;
    return <li><h4 className='mt-2'>{ props.name }</h4> 
     <h6>Status:</h6> {status ? <div className='mb-2' >Completo</div> : <div  className='mb-2'>Incompleto</div>} 
     </li>
    }
