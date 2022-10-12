import React from "react";

export default function Skills() {
    return (
        <section id="skills">
            <div className="bg-myblue font-[Inter] text-2xl text-white text-center pt-10">
                <div className="container mx-auto pt-1">
                    <div className="text-3xl sm:text-5xl font-bold text-center mb-4">Skill</div>
                    <div class="grid mb-8 rounded-lg  md:mb-12 md:grid-cols-2">
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-myblue rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r">
                            <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="font-semibold text-white">Bahasa Pemrograman</h3>
                                <ol className="flex flex-col items-center text-white my-4">
                                    <li className="flex items-center">
                                        <div class="ml-2 opacity-80">Python</div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="ml-2 opacity-80">Java</div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="ml-2 opacity-80">Prolog</div>
                                    </li>
                                </ol>
                            </blockquote>
                        </figure>
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-myblue rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg">
                            <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="font-semibold text-white">Back End</h3>
                                <ol className="flex flex-col items-center text-white my-4">
                                    <li className="flex items-center">
                                        <div class="ml-2 opacity-80">Django REST Framework</div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="ml-2 opacity-80">Springboot</div>
                                    </li>
                                </ol>
                            </blockquote>
                        </figure>
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-myblue rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r">
                            <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="font-semibold text-white">Front End</h3>
                                <ol className="flex flex-col items-center text-white my-4">
                                    <li className="flex items-center">
                                        <div class="ml-2 opacity-80">ReactJS</div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="ml-2 opacity-80">Bootstrap</div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="ml-2 opacity-80">Tailwind CSS</div>
                                    </li>
                                </ol>
                            </blockquote>
                        </figure>
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-myblue rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg">
                            <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="font-semibold text-white">Tools & Others</h3>
                                <ol className="flex flex-col items-center text-white my-4">
                                    <li className="flex items-center">
                                        <div class="ml-2 opacity-80">VS Code</div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="ml-2 opacity-80">Figma</div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="ml-2 opacity-80">GitLab</div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="ml-2 opacity-80">Godot</div>
                                    </li>
                                </ol>
                            </blockquote>
                        </figure>
                    </div>
                </div>
            </div>

        </section>
    );
}