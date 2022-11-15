// import { Component } from "react";

const Search=({dosearch,eventHandle})=> {


return(
    

    <input className=' search-box search-Type' type="search"   placeholder={dosearch}  onChange={eventHandle}/>)
 }




export default Search