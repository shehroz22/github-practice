
import './App.css';
import { Component } from "react";
class App extends Component{

  

  constructor(){
    super()
// this.state={name:" hamza"}
  // }
this.state={monster:[
{name:"ali",
key:"22"},
{name:"hamza",
key:"23q2"},
{name:"sikh",
key:"23332"}
]}
  }



render(){



  return (
  //   <div className="App">
  //   <h1> his name is {this.state.name}</h1>
  //  <button type="" onClick={()=>{this.setState({name:"khan"})} }>clcik me </button>
    
  
  
  
  // </div>

<div className='App'>

<input onChange={(event)=>{console.log(event.target.value)
  const lowerCase=event.target.value.toLowerCase()
  const destate=this.state.monster.filter((monsters)=>{return monsters.name.toLowerCase().includes(lowerCase)})
  this.setState(()=>{ return {monster:destate}})

}} type="search" name="search" placeholder='seacrh' value=""/>



{this.state.monster.map((monster)=>

  <h1 key={monster.key} >{monster.name}</h1>)}
  
</div>

  );
  }
}

export default App;
