import React from 'react'
import gsap from 'gsap'

function Timeline() {
    

    gsap.fromTo("#day",{
        x:-200,
        opacity:0,
        duration:2,
        
    }
    ,{
        x:200,
        opacity:1,
        duration:2,
       
    })
  return (
 <>
 <div id="timeline" className='bg-[#444] h-screen p-[20px] '>
       <div id="day" className='w-[650px] bg-red-400 h-[130px]'>
    <h2>16 september</h2>
    <p>registration</p>
</div>

 </div>
 </>
  )
}

export default Timeline
