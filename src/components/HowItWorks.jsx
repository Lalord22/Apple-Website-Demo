import React from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import  gsap  from 'gsap';
import { useRef } from 'react';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
    const videoRef = React.useRef();

    useGSAP(()=>{
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: 'power2.inOut'
        })
    },[]);


  return (
    <section className='common-padding'>
        <div className='screen-max-width'> 
            <div id="chip" className='flex-center w-full my-20'>
                <img src={chipImg} alt="chip" width={180} height={180} />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='hiw-title'>
                    A17 Pro Chip
                    <br /> A monster for gaming
                </h2>
                <p className='hiw-subtitle'>
                    It's here. The biggest redesign in the history of Apple GPU.
                </p>
            </div>
            <div className='mt-10 md:mt-20 mb-14'>
                <div className='relative h-full flex-center'>
                    <div className='overflow-hidden'>
                        <img src={frameImg} alt="frame" 
                        className='bg-transparent relative z-10'/>
                    </div>
                    <div className='hiw-video'>
                            <video className='pointer-events-none' playsInline preload='none' muted autoPlay ref={videoRef}>
                                <source src={frameVideo} type='video/mp4'/>
                            </video>
                        </div>
                </div>
                <p className='text-center text-gray font-semibold mt-3'>
                    Honkai: Star Rail
                </p>
            </div>
                <div className='hiw-text-container'>
                    <div className='flex flex-1 justify-center flex-col'>
                        <p className='hiw-text g_fadeIn'>
                            A17 is an entirely new class of iPhone Chip
                            that delivers our  {''}
                            <span className='text-white'>
                                best graphics performance ever
                            </span>,
                            .
                        </p>
                    
                    <p className='hiw-text g_fadeIn'>
                        Mobile {' '} 
                        <span className='text-white'>
                            games will look and play better than ever
                        </span>,
                            , with incredibly detailed characters.
                    </p>
                </div>
                <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                    <p className='hiw-text'>New</p>
                    <p className='hiw-bigtext'>Pro-class</p>
                    <p className='hiw-text'>With 6 cores</p>                  
                </div>
                </div>
            
        </div>
    </section>
  )
}

export default HowItWorks