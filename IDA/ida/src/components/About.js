import React from 'react';
import AboutImg from "../images/about.png";

export default function About() {
    const config = {
        line1: 'We IDA - Industrial Design and Animation is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions. We Transform and elevate your Industry and Business With Immersive Technical solution with extensive and wide range of Imagination that becomes Possible.',
        line2: 'We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needswith technologies like AR ( Augmented Reality ), VR( Virtual Reality ), MR( Mixed Reality ) and XR( eXtended Reality ). To reshape the entire future.',
        line3: 'Join Us into the Immersive Future'
    };

    return (
        <section className='flex flex-col md:flex-row bg-secondary p-5' id='about'>
            <div className='py-5 md:w-1/2 flex justify-center items-center'>
                <img 
                    className='w-full max-w-[15rem] h-auto rounded-3xl object-cover sm:max-w-[12rem] md:max-w-[15rem] lg:max-w-[20rem] md:rounded-2xl sm:rounded-xl' 
                    src={AboutImg} 
                    alt="About Us" 
                />
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center text-center md:text-left p-5'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-full md:w-[450px] font-bold'>IDA - AR, VR and MR Company in India</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-5'>{config.line3}</p>
                    <a 
                        href="#about" 
                        className="mt-5 inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}
<p class="content-text hidden-b show"></p>