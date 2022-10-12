import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="bg-mywhite">
            <div className="font-[Inter] container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <div className="text-5xl font-bold mb-4">
                        Proyek
                    </div>
                    <div className="text-2xl mx-auto">
                        Berikut ini proyek-proyek yang pernah berkolaborasi dengan saya:
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="rounded-md absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="rounded-md px-8 py-10 relative z-10 w-full h-full shadow-lg bg-white opacity-0 hover:opacity-100">
                                    <h1 className="text-lg font-bold mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                    <div className="px-6 pt-4 pb-2">
                                        {project.techs.map((tech) => (
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>

    );
}