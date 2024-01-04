import React from 'react'
import { useEffect } from 'react'

function Movie() {
    const getmovie=()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=f0b575e8e23d77c3c5687a915b74bb3e')
        .then(res=>res.json())
        .then(data=>console.log(data.results))
    }
    useEffect(()=>{
        getmovie()
    },[])
  return (
    <>
  
    </>
  )
}

export default Movie