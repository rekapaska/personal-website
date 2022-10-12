import React from "react";
import { AiOutlineGitlab, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Contact() {
    return (
        <section id="contact" className="bg-mywhite">
            <div className="font-[Inter] container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full">
                    <div className="text-5xl xsm:text-5xl font-bold mb-4">
                        Kontak
                    </div>
                    <div className="flex mx-auto">
                        <a href='https://gitlab.com/RekaPaskaEnda' className="m-4">
                            <AiOutlineGitlab className="w-8 h-8 xsm:w-14 xsm:h-14 mx-auto" />
                        </a>
                        <a href='https://www.instagram.com/rekapaska/' className="m-4">
                            <AiOutlineInstagram className="w-8 h-8 xsm:w-14 xsm:h-14 mx-auto" />
                        </a>
                        <a href='https://www.linkedin.com/in/reka-paska-enda' className="m-4">
                            <AiOutlineLinkedin className="w-8 h-8 xsm:w-14 xsm:h-14 mx-auto" />
                        </a>
                        <a href='mailto: rekapaskaendaginting@gmail.com' className="m-4">
                            <AiOutlineMail className="w-8 h-8 xsm:w-14 xsm:h-14 mx-auto" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}