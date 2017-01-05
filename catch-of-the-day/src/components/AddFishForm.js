import React from 'react';

class AddFishForm extends React.Component{
  createFish(event){
    event.preventDefault()
    const fish = {
      name:this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
      }
    console.log('createFish called')
    this.props.addFish(fish)
    this.fishForm.reset()
  }
  render(){
    return (
    <form ref = { (input)=>this.fishForm = input } className="fish-edit" onSubmit={(e)=>this.createFish(e)}>
    <input type="text" ref={(input) => this.name = input} placeholder="Name"   />
    <input type="text" ref={(input) => this.price = input} placeholder="Price"  />
    <select type="text" ref={(input) => this.status = input} >
      <option value="available">Fresh!</option>
      <option value="unavailable">Sold Out!</option>
    </select>
    <textarea type="text" ref={(input) => this.desc = input} placeholder="Fish Desc"></textarea>
    <input type="text" ref={(input) => this.image = input} placeholder="Image"  />
    <button type="submit">+ Add Item</button>
    </form>
    )
  }  

}

export default AddFishForm;
