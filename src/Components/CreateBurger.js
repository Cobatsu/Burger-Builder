import React ,{Component,useContext,useState,useRef,useEffect,useCallback} from 'react';
import styled from 'styled-components';
import './local.css'
import Modal from '../UI/Modal'
import BackDrop from '../UI/BackDrop/BackDrop'

const MainUl =styled.ul`
font-size:20px;
list-style:none;
padding:0;
`

const Manage = styled.div`
 background-color:orange;
 width:100%;
 height:400px;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 font-size:20px;
 font-weight:bold;
`
const CustomaryUsage = styled.div`

border-radius:50%;
height:25px;
width:25px;
background:white;
color:black;
text-align:center
`

const Burger = styled.div`
background-color:white;
width:100%;
height:300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
overflow:scroll;

`
const TopBread = styled.div`
width:300px;
height:50px;
border-radius:20px 20px 0 0 ;
background:	#f46a4e;
margin-top:10px;
`
const BottomBread = styled.div`
width:300px;
height:50px;
border-radius:0 0  20px 20px ;
background:	#f46a4e;
margin-bottom:10px;
`
//you can acces too normal html at. with props
const Order = styled.button`
padding:${props => props.disabled ? '25px' : '30px'}; 
margin-bottom:10px;
color:white;
font-size:20px;
font-weight:bold;
border-radius:10px;
transition:all 100ms;
background-color:${props =>props.disabled ? 'grey' : 'brown' };
&:hover{
 cursor:pointer;
}

`
const buttons =[{name:'Salad'},{name:'Bacon'},{name:'Cheese'},{name:'Meat'}]


const CreateBurger = (props)=>{
 
 const [stateHook,setState] = useState({ 
        Salad:[],
        Bacon:[],
        Cheese:[],
        Meat:[],
        contain:false,
        totalPrice:0,
        OrderButton:false,
        show:false,
 })

 const [x,y] = useState('Jack');

 let {testprops} = props; 
 const simpleCopyState = {...stateHook};


  for(let key in simpleCopyState) 
  {
    if(key !== 'contain' && key !=='totalPrice' && key!=='OrderButton' && key!=='show' )
    simpleCopyState[key]=simpleCopyState[key].length<=0 //this is not a complicated syntax of js , it just returns true or false depends on the situation
  }

 const showUpdate  = ()=>{

  let copyState = {...stateHook};
  copyState.show=!copyState.show;
  setState(copyState);

  }
  
  const purchaseContunied = ()=>{
   
     console.log('I am working')

  }
  const purchaseCancelled = ()=>{

    let copyState = {...stateHook};
    copyState.show=false;
    setState(copyState);

  }

  useEffect(()=>{
  return ()=>{ 
    console.log('hello');
  }   
  },[testprops])

 const updateOrderButton = (stateCopy)=>{
  let keys = Object.keys(stateCopy);
  //this is to control number of length 
  let computedResult = keys.reduce((sum,key)=>{
    let length = stateCopy[key].length
    if(key !== 'contain' && key !=='totalPrice' && key!=='OrderButton'  && key!=='show' )
    {  
          sum += length;
    }
    return sum;
  },0)


  stateCopy.OrderButton=computedResult>0;
  setState({...stateCopy});

 } 


 const add = (name)=>{  
   let focusArray = [...stateHook[name.toString()]];
   let copyState = {...stateHook};

  switch(name){
  case 'Salad' : 
  focusArray[focusArray.length]=(<div key={name+focusArray.length}  style={{height:40 , width:300 , background:'green',borderRadius:10,margin:5}}></div>)
  break;
  case 'Bacon':
  focusArray[focusArray.length]=(<div key={name+focusArray.length} style={{height:30 , width:300 , background:'brown',borderRadius:10,margin:5}}></div>)
  break;
  case 'Cheese':
  focusArray[focusArray.length]=(<div key={name+focusArray.length} style={{height:20 , width:300 , background:'yellow',borderRadius:10,margin:5}}></div>)
  break;
  case 'Meat':
  focusArray[focusArray.length]=(<div key={name+focusArray.length} style={{height:50 , width:300 , background:'black',borderRadius:10,margin:5}}></div>)
   break;
  }

 for (let item in copyState) {   
     if (item===name) {
         copyState[item]=focusArray;  
         copyState.totalPrice+=5;    
     }
 }
  copyState.contain=true;
 
  setState((prevState)=> ({...copyState}))
  updateOrderButton(copyState);
 }



 const remove=(name)=>{
    let focusArray = [...stateHook[name.toString()]];
    let copyState = {...stateHook};
 
   if(focusArray.length>0)
   {
    focusArray.splice(focusArray.length-1,1); 
    //firs part is to assign focusArray to copy of state
      for (let item in copyState) {
      if (item===name) {
        copyState[item]=focusArray;
        copyState.totalPrice-=5;
      }
    }
  }
   //to check whether array contains element or not
    for (let item in copyState) {
    
    if(item !== 'contain' && item !=='totalPrice' && item!=='OrderButton'  && item!=='show' )
      if(copyState[item].length === 0 )
        {
            copyState.contain=false;          
        }
        else
        {
            copyState.contain=true;  
            break;
        }
    }
  setState({...copyState})
  updateOrderButton(copyState);
 }
  
  let valueRef = useRef(null);  


 return(
  <React.Fragment>
    <BackDrop show = {stateHook.show} purchaseCancelled={purchaseCancelled}/>
    <Modal 	ingredient={stateHook} totalPrice={stateHook.totalPrice + '$'}  show={stateHook.show} purchaseCancelled={purchaseCancelled} purchaseContunied={purchaseContunied}/>
   <Burger>
      <TopBread/>{
        stateHook.contain?null:<h1>ADD INGREDIENTS</h1> 
      }

     {stateHook.Salad}
     {stateHook.Bacon}
     {stateHook.Cheese}
     {stateHook.Meat} 

     <BottomBread/>
   </Burger>   
   <Manage>  
      <div>Total Price : {stateHook.totalPrice}$</div>
      <MainUl>
         { 

          buttons.map((item,index)=><li key={index}>
            <CustomaryUsage>{stateHook[item.name].length}</CustomaryUsage> {item.name} 
            <div className='buttons'>  <button disabled={simpleCopyState[item.name]}
            onClick={()=>remove(item.name)}>-</button>  <button
            onClick={()=>add(item.name)}>+</button> </div> </li>)

         }     
      </MainUl>
      <Order disabled={!stateHook.OrderButton} ref={valueRef}>       
           ORDER NOW
      </Order>
   </Manage>   
  </React.Fragment>
 ) 

}


export default CreateBurger;