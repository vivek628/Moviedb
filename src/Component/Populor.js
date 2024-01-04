import React from 'react'
import { useState ,useEffect} from 'react'
import './Card.css'


  function Populor(){
    const [coming,setUp]=useState([])
  const getmovie=()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f0b575e8e23d77c3c5687a915b74bb3e')
    .then(res=>res.json())
    .then(data=> setUp(data.results))
  
   
}
useEffect(()=>{
    getmovie()
},[])

    return(
        
        <div className="outer">
           
       {  coming.map(movie=>(
            <div className="out2">
              
                <div className="img">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} style={{height:350, width:350}} alt="not found" ></img>  
                </div>
                <div className="text">
                  <h1 style={{color:"darkred"}}>{movie.title}</h1>  
                  <br></br>
                 <p>{movie.overview}</p>
                 <br></br>
                <hr></hr>
                </div>
            </div>
          ))}
        </div>
       
    )
  }


export default Populor;