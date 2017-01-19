import React from 'react';

class MenuBar extends React.Component{
  render(){
    return (
    <ul>
      <li><button onClick={this.props.showCart}>Cart</button></li>
      <li><button onClick={this.props.loadSamples}>Load Samples</button></li>
      <li>Login</li>
    </ul>
    )   
  }
}


export default MenuBar;
