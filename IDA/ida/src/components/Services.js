import React from 'react';
import dm from '../images/3dm.png';
import vfx from'../images/vfx.png';
import cg from '../images/cg.png';
import vef from '../images/vediting.png';
import gd from '../images/gd.png';
import anim from '../images/anim.png';
import xr from '../images/XR.png';
import ux from '../images/uxd.png';
import gai from'../images/gai.png';
import mg from '../images/mg.png';
import vp from '../images/vp.png';
import aa from '../images/aa.png';
import dis from '../images/dis.jpg';
import ide from '../images/ide.jpg';
import exe from '../images/exe.jpg'

export default function Services() {
    return (
        <div>
            <section className="bg-my p-6" id="services">
                <div className="container mx-auto pt-3">
                    <div className="text-center mt-5">
                        <h3 className="text-4xl font-bold text-white pt-4">Our Services</h3>
                        <p className="text-white">Reinvent your industry with our industrial solutions</p>
                    </div>

                    <div className="flex flex-wrap justify-center mt-5">
                        <div className="w-full md:w-1/3 p-2">
                            <ul className="bg-primary text-white p-4 rounded-lg space-y-4">
                                <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={dm} alt="3D modeling/Rendering"/>
                                    <span>3D modeling/Rendering</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={vfx} alt="3D modeling/Rendering"/>
                                    <span>VFX</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={cg} alt="3D modeling/Rendering"/>
                                    <span>CG</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={vef} alt="3D modeling/Rendering"/>
                                    <span>3D modeling/Rendering</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 p-2">
                            <ul className="bg-primary text-white p-4 rounded-lg space-y-4">
                            <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={gd} alt="3D modeling/Rendering"/>
                                    <span>Game Devlopment</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={anim} alt="3D modeling/Rendering"/>
                                    <span>2D|3D Animation</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={xr} alt="3D modeling/Rendering"/>
                                    <span>AR|VR|MR|XR</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={ux} alt="3D modeling/Rendering"/>
                                    <span>UI|UX</span>
                                </li>  
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 p-2">
                            <ul className="bg-primary text-white p-4 rounded-lg space-y-4">
                            <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={gai} alt="3D modeling/Rendering"/>
                                    <span>Generatives AI</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={mg} alt="3D modeling/Rendering"/>
                                    <span>Motion Graphics</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={vp} alt="3D modeling/Rendering"/>
                                    <span>Virtual production</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <img className="w-8 h-8 object-cover rounded-full" src={aa} alt="3D modeling/Rendering"/>
                                    <span>Academic Alliances</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-my'>
    <div className="container  mx-auto mt-5 pb-5 pt-4">
        <div className="text-center pt-4 pb-4">
            <h4 className="pb-2 text-2xl font-bold">Our Working Process</h4>
            <p className="text-white">A well-structured workflow with great design execution</p>
        </div>
        <div className='card-container'>
            <div className='card'>
                <img src={dis}/>
                <h3>Discussion</h3>
                <p className="text-start hidden-b show">Under the client's business,goals and challenges for building relationship.</p>
                <a href='#' className='card-button'>Read More</a>
            </div>

            <div className='card'>
                <img src={ide}/>
                <h3>ideate</h3>
                <p className="text-start hidden-b show">Gather ideas and create the first concept for the future product..</p>
                <a href='#' className='card-button'>Read More</a>
            </div>

            <div className='card'>
                <img src={dis}/>
                <h3>Execution</h3>
                <p className="text-start hidden-b show">Provide the first draft of a project,accept minor and major revisions.</p>
                <a href='#' className='card-button'>Read More</a>
            </div>

        </div>
    </div>
</section>

        </div>
    );
}
