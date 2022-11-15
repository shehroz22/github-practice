// import { Component } from "react";
import "./Card.style.css"
const CardComponent=({monsters})=>{

  

return(

    // <div>
    //     <h1>{this.props.monsters}</h1>

    // </div>
    

       <div className="card-list-one" >
        {monsters.map((monster)=>

          {  return(

            <div className="card-container" key={monster.id}>
                
       
        <img src={`https://robohash.org/${monster.id}?set=set2`} alt={monster.id}/>
         
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
            
        </div>
        
        )
            })}
       </div>
    
        
    
    
    )
    

}

export default CardComponent