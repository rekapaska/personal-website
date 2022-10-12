import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { logo } from "../data";


export default function Navbar() {
    return (
        <section id="Navbar" className="bg-mywhite">
            <nav class="bg-mywhite px-2 sm:px-4 py-2.5 rounded" />
            <div className="mx-auto font-[Inter]">
                <div class="text-center mt-10">
                    <img src={logo.image} alt="" className="mx-auto w-24 h-28" />
                    <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Reka Paska Enda
                    </h3>
                    <div className='flex align-center justify-center'>
                        <FaGraduationCap size='1.5rem' />
                        <span class="text-lg leading-normal ml-2 mt-0 mb-2 text-blueGray-400">
                            Fresh Graduate - Fasilkom UI
                        </span>
                    </div>
                    <div className='flex align-center justify-center'>
                        <BiBriefcase size='1.5rem' />
                        <span class="text-lg leading-normal ml-2 mt-0 mb-2 text-blueGray-400">
                            Software Developer
                        </span>
                    </div>
                    <div className='flex align-center justify-center mb-5'>
                        <MdOutlineLocationOn size='1.5rem' />
                        <span class="text-lg leading-normal ml-2 mt-0 mb-2 text-blueGray-400">
                            Jakarta, Indonesia
                        </span>
                    </div>
                </div>
            </div>
        </section >
    );
}