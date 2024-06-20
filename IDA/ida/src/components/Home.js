import React from 'react'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
import tre from '../images/TReality.png'
import vi from '../images/Vid.png';
import ai from '../images/ai.jpg';
export default function Home() {
    const config  = {
        
        social: {
            twitter: 'https://twitter.com/AKode',
            facebook: 'https://facebook.com/AKcode',
            linkedin: 'https://tinyurl.com/linkeden-akash'
        }
    }
  return (
    <div>
      <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='w-1/2 flex flex-col'>
        <img  className='md:w-[15rem] h-[15rem] object-cover rounded-3xl' src={ai} />
        <h1 class="header-text pt-50">Bringing Ideas To Our Reality</h1>
        <div className='flex py-10'>
            <a href='{config.social.twitter}' className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
            <a href='{config.social.facebook}' className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href='{config.social.linkedin}' className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
        
        <img  className='md:w-[30rem] h-[20rem] object-cover rounded-3xl' src={tre} />
    </section>
    </div>
  )
}
