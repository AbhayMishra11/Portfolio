import React from 'react';

const skills = [
    { name: 'HTML', description: 'Experienced in building structured and semantic web pages using HTML5.', imgSrc: '/html.svg' },
    { name: 'CSS', description: 'Skilled in creating responsive designs with CSS3 and pre-processors like SASS.', imgSrc: '/css.svg' },
    { name: 'JavaScript', description: 'Proficient in writing clean and efficient JavaScript for interactive web applications.', imgSrc: '/javascript.svg' },
    { name: 'React', description: 'Adept at building dynamic user interfaces with React and state management libraries.', imgSrc: '/react.svg' },
    { name: 'Git', description: 'Experienced with version control systems like Git and collaborative platforms like GitHub.', imgSrc: '/git.svg' },
    { name: 'Tailwind CSS', description: 'Proficient in using Tailwind CSS for utility-first CSS styling.', imgSrc: '/tailwindcss.svg' },
];

const SkillsSection = () => (
    <section id="skills" className="skills-secton bg-gray-50 text-gray-900 px-6 py-12">
        <div className="container mx-auto px-6 py-8 shadow-2xl rounded-lg">
            <div className="flex justify-start items-center gap-4 mb-8">
                <div className="h-[3px] w-[7vw] bg-indigo-600"></div>
                <h2 className="text-5xl text-indigo-600 font-bold">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:bg-indigo-50 hover:shadow-2xl">
                        <img className="w-12 h-12 mx-auto mb-4" src={skill.imgSrc} alt={skill.name} />
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">{skill.name}</h3>
                        <p className="text-gray-700 text-center">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;
