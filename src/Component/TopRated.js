import React from "react";
import { useEffect,useState } from "react";

import './Card.css'
function TopRated()
{
const [Movie,setMovie]=useState([])
const getmovie=()=>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f0b575e8e23d77c3c5687a915b74bb3e')
    .then(res=>res.json())
    .then(data=> setMovie(data.results))
  
   
}
useEffect(()=>{
    getmovie()
},[])

    return(
        
        <div className="outer">
           
       {  Movie.map(topmovie=>(
            <div className="out2">
                <div className="img">
                <img src={`https://image.tmdb.org/t/p/original${topmovie.poster_path}`} style={{height:350, width:350}} alt="not found" ></img>  
                </div>
                <div className="text">
                  <h1 style={{color:"darkred"}}>{topmovie.title}</h1>  
                  <br></br>
                 <p>{topmovie.overview}</p>
                 <br></br>
                <hr></hr>
                </div>
            </div>
          ))}
        </div>
       
    )
}
export default TopRated;