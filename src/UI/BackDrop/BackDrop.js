import React , {useEffect} from 'react';
import './BackDrop.css'


 const BackDrop = (props)=>{

  return  props.show ?
   <div className='Backdrop' onClick={props.purchaseCancelled}></div>
   : null //this means that this component will returns nothing
 }

export default BackDrop; 

