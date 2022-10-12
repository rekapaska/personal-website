import React from "react";

export default function Experiences() {
    return (
        <section id="experiences">
            <div className="font-[Inter] bg-split-myred-mywhite flex justify-center items-center py-10">
                <div className="shadow-lg bg-white rounded-md">
                    <div className="flex flex-col items-center justify-center border-b-2 border-gray-100 px-16 py-8">
                        <div className="flex items-center">
                            <div className="text-3xl sm:text-5xl font-bold text-center mb-4">Pengalaman</div>
                        </div>
                        <div className="text-xl sm:text-2xl text-center">Back End Engineer di Sagara Technology (Trainee Program)</div>
                    </div>
                    <div className="px-8 py-4">
                        <ol className="flex flex-col items-center">
                            <li className="flex items-center">
                                <div class="ml-2 opacity-80">Membuat API dan model untuk web yang melakukan subtitling.</div>
                            </li>
                            <li className="flex items-center">
                                <div className="ml-2 opacity-80">Menggunakan metodologi Scrumban selama proses pengembangan.</div>
                            </li>
                            <li className="flex items-center">
                                <div className="ml-2 opacity-80">Mengembangkan menggunakan Django REST Framework dan MySQL.</div>
                            </li>
                            <li className="flex items-center">
                                <div className="ml-2 opacity-80">Menggunakan Docker RabbitMQ & Celery untuk asynchronus task queue. </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}