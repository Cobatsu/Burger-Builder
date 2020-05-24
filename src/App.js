import React ,{useState, useCallback , Component ,createRef} from 'react';
import CreateBurger from './Components/CreateBurger';
import styled from 'styled-components';
import NavBar from './Components/NavBar'



const Main = styled.div`

display:flex;
flex-direction:column;
width:100%;
height:100%;
justify-content:space-between

`




class  App extends Component
{  //to prevent  unnecessary  renders  ,we can use useCallback  
  
   // if this dependence changes , function will be recreated therefore the props which we pass to child component  will  change 
   state={
      countX:0,
      text:'',
      fruits:[{name:'Apple',id:1 },{name:'Orange',id:2},{name:'Banana',id:3},{name:'Lemon',id:4}]
   }
   refValue=null;
  
   deleteFruit=()=>{
     this.setState((prevState)=>({countX:prevState.countX+1})) // we can acess style attribute by using createRef
   }

   refHandler=(element)=>{   
     this.refValue=element;  // here this refHandler function is invoked before componentDidMount
   }


    render(){
    return (
      <Main>
        <input type='text' onChange={event=>{this.setState({text:event.target.value})}}/>
        <button style={{padding:20, background:'red' ,transition:'300ms'}} onClick={this.deleteFruit}></button>
        <ul>
          {this.state.fruits.map((item,index)=>{return <li>{item.name}  {item.id}</li>})}
        </ul>
        
       <NavBar/>
       <CreateBurger testprops={this.state.countX}  />
      </Main> 
      )
   }
 

}

export default App;
