import React ,{useEffect} from 'react';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Problem() {
    useEffect(() => {
        const screenWidth = window.innerWidth;
    
        if (screenWidth > 1024) {
          // Animation for desktop/laptop screens
          const tlDesktop = gsap.timeline();
    
          
          tlDesktop.fromTo(".dev-box h4",{
            opacity:0,
            y: 40,
            stagger: {
              amount: 2
            },
          },
           {
            opacity: 1,
            y:-40,
            
            stagger: {
              amount: 2
            },
            scrollTrigger: {
              trigger: ".dev-box h4 ",
              
             
              start: "-250 top",
              end: "-200 top",
              scrub: 1
            }
          });
      
            tlDesktop.fromTo(".dev-box .problem",{
              opacity:0,
              y: 20,
              stagger: {
                amount: 2
              },
            },
             {
              opacity: 1,
              y:0,
              
              stagger: {
                amount: 2
              },
              scrollTrigger: {
                trigger: ".dev-box .problem ",
                
               
                start: "-200 top",
                end: "-100 top",
                scrub: 1
              }
            });
         
        } else if (screenWidth <= 1024 && screenWidth > 768) {
          const tlTablet = gsap.timeline();
    
          
        } else {
          const tlMobile = gsap.timeline();
    
          tlMobile.fromTo(".dev-box h4",{
            opacity:0,
            y: 40,
            stagger: {
              amount: 2
            },
          },
           {
            opacity: 1,
            y:0,
            
            stagger: {
              amount: 2
            },
            scrollTrigger: {
              trigger: ".dev-box h4 ",
              
             
              start: "-950 top",
              end: "-700 top",
              scrub: 1
            }
          });
      
            tlMobile.fromTo(".dev-box .problem",{
              opacity:0,
              y: 20,
              stagger: {
                amount: 2
              },
            },
             {
              opacity: 1,
              y:0,
              
              stagger: {
                amount: 2
              },
              scrollTrigger: {
                trigger: ".dev-box .problem ",
                
                
                start: "-700 top",
                end: "-300 top",
                scrub: 1
              }
            });
    
         
        }
      }, []);
  return (
    <>
    <div id="problem" className='bg-red-300 min-h-screen'>
    <div id="page3">
      
      <div className="box dev-box flex justify-center items-center flex-col gap-[40px]">
        <h4 className='font-semibold text-[80px]'>Problem Statement</h4>
        <div className="problem elem-div h-[300px] w-[300px]  bg-black text-white grid grid-cols-3 md:flex  ">
          probelm statement  1
        </div>
        <div className="problem elem-div h-[300px] w-[300px]  bg-black text-white grid grid-cols-3 md:flex  ">
        probelm statement  2
        </div>
        <div className="problem elem-div h-[300px] w-[300px]  bg-black text-white grid grid-cols-3 md:flex  ">
        probelm statement  3
        </div>
      </div>
    </div>

    </div>
    </>
  )
}

export default Problem
