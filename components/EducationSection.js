import React from 'react';

const EducationSection = () => {

    const institutes = {
        highschool: "Sacred Heart School",
        seniorsecondary: "Sacred Heart School",
        BCA: "Deen Dayal Upadhyay Gorakhpur University"
    };
    const year = {
        highschool: "2019-2020",
        seniorsecondary: "2021-2022",
        BCA: "2022-2025"
    };
    const boards = {
        highschool: "Central Board of Secondary Education",
        seniorsecondary: "Central Board of Secondary Education",
        BCA: "Deen Dayal Upadhyay Gorakhpur University"
    };

    const educations = ["highschool", "seniorsecondary", "BCA"];

    return (
        <section id="education" className="bg-gray-100 text-gray-800 py-12">
            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-600">Education</h2>
                <div className="flex flex-wrap md:gap-y-5 items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                    {educations.map((details, index) => (
                        <div key={index} className="flex flex-col items-center bg-white w-full md:w-[35vw] p-6 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:bg-indigo-50 hover:shadow-2xl">
                            <div className="flex items-center mb-4">
                                <div className="h-[2px] w-[6vw] bg-indigo-600"></div>
                                <h3 className="text-2xl font-bold ml-4 text-indigo-600">{institutes[details]}</h3>
                            </div>
                            <p className="text-center text-gray-700 mb-2">Year: {year[details]}</p>
                            <p className="text-center text-gray-700">Board: {boards[details]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EducationSection;
