import React from 'react';
import ps from '../images/ps.jpg';
import tt from '../images/tt.jpg';
import sfa from '../images/sfa.jpeg';

export default function Project() {
    const config = {
        projects: [
            {
                image: ps,
                description: 'Mobile shooting game.',
                link: ''
            },
            {
                image: tt,
                description: 'Mobile legends AAA title racing mobile game',
                link: ''
            },
            {
                image: sfa,
                description: 'Oneyes startup fest expo',
                link: ''
            }
        ]
    };

    return (
        <section id='projects' className='bg-primary text-white py-20 px-5'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h1 className='text-4xl border-b-4 border-secondary mb-5 inline-block font-bold'>Our Projects</h1>
                    <p className='text-lg'>Have a sneak peek at the Arts we Crafted</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                    {config.projects.map((project, index) => (
                        <div key={index} className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} alt='Project' />
                            <div className='absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center'>
                                <div className='text-center'>
                                    <p className='text-lg'>{project.description}</p>
                                    <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>Learn more</a>
                            </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
