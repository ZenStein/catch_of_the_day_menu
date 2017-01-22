import React from 'react';
import base from '../base'
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
  //constructor(){
  //  super()
  //  this.goToStore = this.goToStore.bind(this)
 // }
  componentDidMount(){
    base.onAuth((user) => {
    if (user) {
      console.log('user', user);
      console.log(this.email.value)
      console.log(this.password.value)
    } else {
      console.log("no user");
    }
    })
  }
  attemptLogin(event){
    event.preventDefault()
    console.log('you hit it')  
    console.log(this.state)
   base.authWithPassword({
      email    : this.email.value,
      password :this.password.value   
   }, (err, user) => {
     if(user){ 
      this.setState({uid: user.uid})
    console.log(this.state)
      console.log(user.uid)
      this.context.router.transitionTo('/')
     }
     if(err){
      console.log(err)
     }
    });
  }
  render(){
    return (
    <form className="store-selector" onSubmit={(e) => this.attemptLogin(e)}>
    <h2>Boulder Bay Station</h2>
    <input type="text" required name="email" ref={(input) => this.email = input} placeholder="email" />
    <input type="text" required name="password" ref={(input) => this.password = input}  placeholder="password" />
    <button type="submit" >Login</button>
    
    </form>
    )   
  }
}
StorePicker.contextTypes = {
  router: React.PropTypes.object
  }


export default StorePicker;
