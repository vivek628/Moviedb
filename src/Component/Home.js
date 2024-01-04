import React, { useState,useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import Navbar from './Navbar';
function Home()
{
    const [Movie,setMovie]=useState([])
    const getmovie=()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=f0b575e8e23d77c3c5687a915b74bb3e')
        .then(res=>res.json())
        .then(data=>setMovie(data.results))
    }
    useEffect(()=>{
        getmovie()
    },[])
    return (
        <>
        <Navbar></Navbar>
        <div className='poster' style={{marginTop:80, height:100}}>
            <Carousel
               showThumbs={false}
               autoPlay={true}
               infiniteLoop={true}
               transitionTime={2}
               showStatus={false}
              
               >
                {
                    Movie.map(movie=>(
                        <div className='box1'>
                        <div className='one'>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} style={{height:1600}} ></img>  
                   
                    <div className='title'>
                     {movie?movie.original_title:""}
                     <br></br>
                     {movie?movie.release_date:""}
                     <br></br>
                     <span> {movie?movie.overview:""}
                     <span style={{color:'red'}}>  ★</span>
                    </span>
                    </div>  
                    </div>  
                    </div>        ))
                }
           

            </Carousel>
         
        </div>
        </>

    )
}
export default Home;