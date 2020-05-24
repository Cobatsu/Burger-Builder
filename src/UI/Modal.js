import React ,{useEffect,useState} from 'react';
import './Modal.css'
import ButtonHolder  from './Buttons/Buttons'

const modal = (props)=>{
  
 let keys =Object.keys(props.ingredient).map((key,index)=>{ 
    if(key !== 'contain' && key !=='totalPrice' && key!=='OrderButton'  && key!=='show' )
        return <li key={key} >{key} : {props.ingredient[key].length} </li>
   
 })
  // it is so important to use state for each part;
 return (   
        props.show ?
       <div className={'Modal'} style={{opacity:props.show ? 1 : 0}} >
          <ul>
            <strong>Total Price : </strong> {props.totalPrice}
            {keys}
          </ul>
        <p style={{textAlign:'center'}}>Continue to Checkout ?</p>
        <div style={{display:'flex' , justifyContent:'center'}}>
        <ButtonHolder action ={props.purchaseCancelled} type='Cancel'>CANCEL</ButtonHolder>
        <ButtonHolder action = {props.purchaseContunied} type ='Contuniue'>CONTİNUE</ButtonHolder>
        </div>
       </div>
       :null
 )
}

export default React.memo(modal);