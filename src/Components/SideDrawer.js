import React from  'react'
import styled from 'styled-components';



const SideDrawer  = styled.div`

width:65%;
background-color:white;
display:none;
height:100%;
position:fixed;
z-index:200;
top:0;
left:0;
transition:transform 200ms ease-out;
@media(max-width:500px){
    display:flex;
}
transform: translateX(${props=>props.position});
`
const NavigationItems = styled.div`

display:flex;

align-items:flex-start;
flex-direction:column;
width:100%;
height:100%;
`


const sideDrawer  = (props)=>{

  return(
   <SideDrawer position={props.animatedPosition}>
        <NavigationItems>
          <div style={{marginRight:30}}>
                   Burger Builder
          </div>
          <div style={{marginRight:30}}>
                   Check Out
          </div>
        </NavigationItems>
   </SideDrawer>
  )
}


export default sideDrawer;