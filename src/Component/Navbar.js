import React from 'react'
import './nav.css'
import {  Link, useNavigate } from 'react-router-dom'

function Navbar()

{  
    
   let nav=useNavigate()
   function goto()
   {
    nav('/')
   }
    function goto2()
    {
        nav('/top')
    }
    function goto3()
    {
        nav('/up')
    }
    function goto4()
    {
        nav('/pop')
    }
 
    return(
        <>
       
        <div className='main'>
            <div className='left'>
            <button style={{padding:15}} className='navbtn' onClick={goto}>🅲🅸🅽🅴🅼🅰  🅲🆁🅸🆃🅸🅲</button>
            </div>
            <div className='right'>
                <div className='one'>
            <button  style={{padding:15,margin:10,border:'none',borderRadius:25,fontSize:'Larger',marginLeft:60}} onClick={goto2}>𝕋𝕆ℙ_ℝ𝔸𝕋𝔼𝔻</button>
            </div>
            <div className='two'>
            <button style={{borderRadius:25,border:'none',marginLeft:60}} onClick={goto4} >ℙ𝕆ℙ𝕌𝕃𝔸ℝ</button>
            </div>
            <div className='two'>
            <button style={{borderRadius:25,border:'none',marginLeft:60}}  onClick={goto3}>𝕌ℙℂ𝕆𝕄𝕀ℕ𝔾</button>
            </div>
            </div>
        </div>
        
        </>

    )
}
export default Navbar;