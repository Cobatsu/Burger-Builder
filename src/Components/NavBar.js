import React ,{Component} from 'react';
import styled from 'styled-components'
import SideDrawer from './SideDrawer';
import BackDrop from '../UI/BackDrop/BackDrop'

const Navbar = styled.div`

background:brown;
height:70px;
width:100%;
display:flex;
justify-content:flex-end;
font-size:20px;
color:white;
align-items:center;
@media(max-width:500px){
  justify-content:flex-start;
}

`
const Menu = styled.button`
margin-left:20px;
display:none;
font-family: 'Sriracha', cursive;
@media(max-width:500px){
  display:${props=>props.adjusting ? 'none' : 'block'};
}

`
const NavigationItems = styled.div`

display:flex;
justify-content:center;
align-items:center;
height:100%;
@media(max-width:500px){
  display:none;
}
`

class NavBar extends Component
{
  state={sideDrawerPosition:'-100%',show:false}

  openSideDrawer =  ()=>{
      this.setState({sideDrawerPosition:'0',show:true})  //zero means current position of  div
  }
   closeSideDrawer = ()=>{
      this.setState({sideDrawerPosition:'-100%',show:false}) 
 }
  
  render(){
  return(
    <React.Fragment>
      <BackDrop show = {this.state.show} purchaseCancelled={this.closeSideDrawer}  />
      <SideDrawer animatedPosition={this.state.sideDrawerPosition}/>
      <Navbar> 
        <Menu onClick={this.openSideDrawer}>
          MENU  
        </Menu>  
        <NavigationItems>
          <div style={{marginRight:30}}>
                   Burger Builder
          </div>
          <div style={{marginRight:30}}>
                   Check Out
          </div>
        </NavigationItems>
      </Navbar>
      </React.Fragment>
   )
  }
}

export default NavBar;