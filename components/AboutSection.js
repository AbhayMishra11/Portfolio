import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import localFont from 'next/font/local';

const Lightwrite = localFont({
    src: "./fonts/TulpenOne.ttf",
    variable: "--font-tulpenone",
    weight: "100 900",
});
const Boldwrite = localFont({
    src: "./fonts/Iceberg.ttf",
    variable: "--font-iceberg",
    weight: "100 900",
});
const Borel = localFont({
    src: "./fonts/Borel.ttf",
    variable: "--font-borel",
    weight: "100 900",
});

const AboutSection = () => (
    <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <section id="about" className="about-section bg-gray-50 text-gray-900 px-6 py-12">
            <div className="container mx-auto px-6 py-8 shadow-2xl rounded-lg">
                <div className="flex justify-start items-center gap-4 mb-8">
                    <div className="h-[3px] w-[7vw] bg-indigo-600"></div>
                    <h2 className="text-5xl text-indigo-600 font-bold">About Me</h2>
                </div>
                <p className="max-w-3xl mx-auto mb-6 md:mb-8 text-lg md:text-xl lg:text-2xl leading-relaxed text-center font-light transform transition duration-500 hover:scale-105 hover:text-indigo-700">
                    I am a passionate developer with a fresh perspective and a strong desire to learn and grow. I am currently in my last year of a degree in Computer Science and have since been honing my skills in web development.
                </p>
                <p className="max-w-3xl mx-auto mb-6 md:mb-8 text-lg md:text-xl lg:text-2xl leading-relaxed text-center font-light transform transition duration-500 hover:scale-105 hover:text-indigo-700">
                    Throughout my academic journey, I have developed a keen interest in frontend development. I am proficient in technologies like HTML, CSS, JavaScript, and React. I am always excited to take on new challenges and collaborate on innovative projects that solve real-world problems.
                </p>
            </div>
        </section>
    </>
);

export default AboutSection;

