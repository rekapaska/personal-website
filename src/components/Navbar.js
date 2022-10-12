import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { GiMechaHead } from "react-icons/gi";


export default function Navbar() {
    return (
        <section id="Navbar" className="bg-mywhite">
            <nav class="bg-mywhite px-2 sm:px-4 py-2.5 rounded">
                {/* <nav class="bg-mywhite px-2 sm:px-4 py-2.5 rounded  border-b-2 border-gray-200 mb-2.5">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <ul class="mx-auto flex flex-col p-4 mt-4 bg-mywhite rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-3xl md:font-medium md:border-0 md:bg-mywhite">
                        <li>
                            <a href="#about" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tentang</a>
                        </li>
                        <li>
                            <a href="#experiences" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pengalaman</a>
                        </li>
                        <li>
                            <a href="#projects" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Proyek</a>
                        </li>
                        <li>
                            <a href="#skills" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skill</a>
                        </li>
                        <li>
                            <a href="#contact" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kontak</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
            </nav>
            <div className="mx-auto font-[Inter]">
                <div class="text-center mt-10">
                    <GiMechaHead className="w-28 h-28 mx-auto fill-myblue" />
                    <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Reka Paska Enda
                    </h3>
                    <div className='flex align-center justify-center'>
                        <FaGraduationCap size='1.5rem' />
                        <span class="text-md leading-normal ml-2 mt-0 mb-2 text-blueGray-400">
                            Fresh Graduate - Fasilkom UI
                        </span>
                    </div>
                    <div className='flex align-center justify-center'>
                        <BiBriefcase size='1.5rem' />
                        <span class="text-md leading-normal ml-2 mt-0 mb-2 text-blueGray-400">
                            Software Developer
                        </span>
                    </div>
                    <div className='flex align-center justify-center mb-5'>
                        <MdOutlineLocationOn size='1.5rem' />
                        <span class="text-md leading-normal ml-2 mt-0 mb-2 text-blueGray-400">
                            Jakarta, Indonesia
                        </span>
                    </div>
                </div>
            </div>
        </section >
    );
}