import React from 'react';
import AddFishForm from './AddFishForm'
class Inventory extends React.Component{
  constructor(){
    super()
    this.renderInventory = this.renderInventory.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e, key){
      const fish = this.props.fishes[key] 
      const updatedFish = {...fish, [e.target.name]: e.target.value}
      this.props.updateFish(key, updatedFish)
  }
  renderInventory(key){
    const fish = this.props.fishes[key]
     return(
      <div className="fish-edit" key={key}>
        <input type="text" name="name" onChange={(e) => this.handleChange(e, key)}  placeholder="name" value={fish.name} />
        <input type="text" name="price" onChange={(e) => this.handleChange(e, key)} placeholder="price" value={fish.price} />
    <select type="text" name="status" onChange={(e) => this.handleChange(e, key)} placeholder="status" value={fish.status} >
      <option value="available">Fresh!</option>
      <option value="unavailable">Sold Out!</option>
    </select>
        <input type="text" name="desc"  onChange={(e) => this.handleChange(e, key)} placeholder="desc" value={fish.desc} />
        <input type="text" name="image" onChange={(e) => this.handleChange(e, key)} placeholder="image" value={fish.image} />
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
     ) 
  }
  render(){
    return (
    <div>
    <h2>Inventory</h2>
    {Object.keys(this.props.fishes).map(this.renderInventory)}
    <AddFishForm addFish={this.props.addFish} />
    <button onClick={this.props.loadSamples}>load sample fishes</button>
    </div>
    )
  }  

}
 
export default Inventory;
