import React from 'react';

const Experience = () => {
    return (
        <main className='pt-24 min-h-screen'>
            <div className="max-w-5xl mx-auto p-6  ">
            <h2 className="text-3xl font-bold mb-4 flex justify-start items-center ">Experience</h2>
        <div className="max-w-5xl mx-auto p-6 bg-white rounded mt-2">

            <div className="mb-6">
                <h3 className="text-xl font-semibold">Web Developer – ForLearn</h3>
                <p className="text-sm text-gray-600">2024</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Developed interfaces using React + Vite, JavaScript, and TailwindCSS.</li>
                    <li>Delivered production-ready interfaces for two major projects.</li>
                    <li>Completed 100% of assigned front-end tasks in agile sprints.</li>
                </ul>
            </div>
        </div>
            </div>

        </main>
    );
};

export default Experience;
