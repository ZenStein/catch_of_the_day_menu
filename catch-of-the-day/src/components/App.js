import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import MenuBar from './MenuBar';
import base from '../base';
class App  extends React.Component{
  constructor(){
    super()
    //console.log('app constructor called')
    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.updateFish = this.updateFish.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.removeFromOrder = this.removeFromOrder.bind(this)
    this.removeFish = this.removeFish.bind(this)
    this.showCart = this.showCart.bind(this)
    this.state = {
      fishes: {},
      order: {},
      showingCart: false,
      testey: 'yesem'
    }
  }
  componentWillMount(){
    //this runs right before <App> is rendered
    this.ref = base.syncState('boulderbaystation2', {
      context: this,
      state: 'fishes'
    })  
    // check if there is an existing order in localStorage
    const localStorageRef = localStorage.getItem('boulderbaystation')
    if(localStorageRef){
      this.setState({
        order: JSON.parse(localStorageRef)  
      })  
    }
  }
  componentWillUnmount(){
    base.removeBinding(this.ref)  
  }
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('boulderbaystation',JSON.stringify(nextState.order))  
  }
  addFish(fish){
    const fishes = {...this.state.fishes}
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish
    
    this.setState({ fishes }); //which is same as {fishes: fishes}
  }
  updateFish(key, updatedFish){
    const fishes = {...this.state.fishes}   
    fishes[key] = updatedFish
    this.setState({ fishes })
  }
 removeFish(key){
    const fishes = {...this.state.fishes}
    fishes[key] = null
    this.setState({ fishes })

  } 
  loadSamples(){
    this.setState({
      fishes: sampleFishes
    })  
  }
  addToOrder(key){
    const order = {...this.state.order}
    order[key] = order[key] + 1 || 1
    this.setState({ order })
  }
  removeFromOrder(key){
    const order = {...this.state.order}
    delete order[key]
    this.setState({ order })
  }
  showCart(){
  const showCart = !this.state.showingCart
  console.log(showCart)  
  this.setState({showingCart: showCart})
  }
  render(){

    return (
    <div className="catch-of-the-day">
      <div className="menu">
      <MenuBar 
      showCart={this.showCart} 
      loadSamples={this.loadSamples} />
         <Header tagline="Big Bear Delivery"/> 
         <ul className="list-of-fishes">
         {
            Object
            .keys(this.state.fishes)
            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/> )  
         }
         </ul>
      </div>
      
      {
        this.state.showingCart == true &&
       <Order 
      fishes={this.state.fishes} 
      order={this.state.order}
      params={this.props.params}
      removeFromOrder={this.removeFromOrder}
      />
      }
      
  {/*    <Inventory 
      addFish={this.addFish} 
      loadSamples={this.loadSamples} 
      fishes={this.state.fishes}
      updateFish={this.updateFish} 
      removeFish={this.removeFish} 
      />
  */}    
    </div>
    )   
  } 

}

export default App;
