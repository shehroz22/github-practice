

// import { Component } from 'react';



import CardComponent from './Components/Card-list/CardComponent';
import Search from './Components/Search-list/Search';
import './App.css';
import { useEffect, useState } from 'react';

const App=()=>{

  const[searchField,setSearchField]=useState("")
  const[monsters,setMonsters]=useState([])
  const [search,setSearch]=useState(monsters)

  useEffect(()=>{
console.log("effect fired")
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((Response)=>Response.json())
  .then((user)=>setMonsters(user))
 
  },[])
  
 useEffect(()=>{

  const search=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField)
   
    
   })
   setSearch(search)
   console.log("yes")

 },[monsters,searchField])



  const filteredMonster=(event)=>{console.log(event.target.value)
    const lowerCase=event.target.value.toLocaleLowerCase()
     setSearchField(lowerCase)
    
    
    }
    

    







return(
   <div className='App'>
 <Search className="search-box"  dosearch ="search the monster"  eventHandle ={filteredMonster}   />
<CardComponent monsters={search}/>
  
 
  </div>
  //  {search.map((monster)=>{
  // return <div key={monster.id}>
  
  // <h1>{monster.name}</h1></div>
  //   })
  // }
  

  
  
  // </div>

)}
export default App

//2 class component below all above is functional component 
// class  App extends Component {

// constructor(){
//   super()


//   this.state={
//     name:"ali",
//     class:{grade:"8th"}
  
//   monsters:[
//     {name:"linda",
//   id:12},
//     {name:"linda",id:23},
    
//     {name:"linda",id:34}
    
//         ]
// }
// }
//video 36 lifecycle

// this.state={

// monsters:[],
// lowerCase:""

// }  
// }

// componentDidMount(){

//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((Response)=>Response.json())
  // .then((user)=>{
  //   console.log(user)
  // })

//   .then((users)=>this.setState(()=>{
//     return {monsters:users}
    
//   }))
// }
//   render(){
    // const search=this.state.monsters.filter((monster)=>{
    //   return monster.name.toLocaleLowerCase().includes(this.state.lowerCase)
      
    //  })
//deconstructing method used below
 
  // const {monsters,lowerCase}=this.state

 //deconstructing
    // const search=monsters.filter((monster)=>{
    //   return monster.name.toLocaleLowerCase().includes(lowerCase)
      
    //  })
    // const filteredMonster= (event)=>{console.log(event.target.value)
    //   const lowerCase=event.target.value.toLocaleLowerCase()
      
        
    //   this.setState(()=>{
    //   return {lowerCase}
    //   })
      
    //   }
    
    // return (
//       <div className="App">
       
          
//          <p>Hi this is {this.state.name}and i study in {this.state.class.grade}</p>
//          <button onClick={()=>{
//           this.setState({name:"shehroz"})
//          this.setState( {class:{grade:"10th"}}
//          )
// this.setState(()=>{
//   return{
//     class:{grade:"120th"}
//   }
// })

//          }} type="">click</button>
     
//       </div>

// <div className='App'>
// <Search className="search-box"  dosearch ="search the monster"  eventHandle ={filteredMonster}   />

// <CardComponent monsters={search}/>
// </div>
//  {search.map((monster)=>{
// return <div key={monster.id}>

// <h1>{monster.name}</h1></div>
  // })
// }




// </div>
//     );


  

//     )}

// }

// export default App;
