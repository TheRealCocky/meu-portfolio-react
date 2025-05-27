import React from 'react';

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 ">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>

            {/* Project: AngoIA */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2 text-angola-red">AngoIA - Angola Expert Chatbot (AI & Frontend)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    An interactive and culturally enriched chatbot about Angola's history, culture, geography, and curiosities, powered by Google's Gemini AI.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-angola-black">My Contribution:</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Complete frontend development with React and Tailwind CSS. Integration with Google Gemini API, prompt engineering for Angola expertise, responsive optimization, and environment/deployment setup via GitHub.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-angola-black">Challenges:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Integration with AI API.</li>
                    <li>Responsive and culturally relevant design.</li>
                    <li>State management in React.</li>
                </ul>

                <h4 className="text-xl font-semibold mb-2 text-angola-black">Technologies:</h4>
                <p className="text-gray-700 mb-4">
                    Frontend: React.js, Vite.js, Tailwind CSS <br/>
                    AI: Google Gemini API (2.0 Flash) <br/>
                    Others: Git, GitHub, WebStorm
                </p>

                <h4 className="text-xl font-semibold mb-2 text-angola-black">Links:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><a href="https://github.com/TheRealCocky/AngoIA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository</a></li>
                    <li><a href="https://angoia.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">angoia.com</a></li>
                </ul>
            </div>


            {/* Project: PalancaMedia */}
            <div className="mb-6 p-6 bg-white rounded-lg shadow-lg space-y-4">
                <h3 className="text-xl font-semibold text-angola-black">PalancaMedia</h3>
                <p className="text-gray-700">
                    PalancaMedia is a university multimedia platform built with a focus on sharing and managing educational content. The application enables uploading, organizing, and accessing videos, audio files, documents, slides, books, and interactive quizzes. It features a robust CMS for content administration. This project was developed in collaboration with fellow 4th-year Computer Engineering students and is already available online.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-angola-black">My Contribution:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Structured the frontend architecture using React.js with Vite and Tailwind CSS.</li>
                    <li>Developed responsive interfaces for displaying videos, audio, documents, and other media.</li>
                    <li>Implemented search and filtering logic for content by type and year.</li>
                    <li>Worked on backend integration (Node.js + MongoDB), including authentication and data routing.</li>
                    <li>Contributed to user experience (UX) design and usability testing.</li>
                    <li>Created the REST APIs.</li>
                </ul>

                <h4 className="text-xl font-semibold">Technologies:</h4>
                <p className="text-gray-700 mb-4">
                    Frontend: React.js, Vite.js, Tailwind CSS <br/>
                    Backend: Node.js, Express, MongoDB <br/>
                    Hosting: Vercel (frontend), Render (backend)<br/>
                    Others: Git, GitHub, WebStorm, Postman
                </p>

                <h4 className="text-xl font-semibold mb-2 text-angola-black">Links:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><a href="https://github.com/TheRealCocky/palancamedia" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository</a></li>
                    <li><a href="https://palancamedia-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">palancamedia.com</a></li>
                </ul>
            </div>


            {/* Projeto: ZungeuiraCRUD - COM BACKGROUND */}
            <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-angola-black">ZungeuiraCRUD</h3>
                <p className="text-gray-700">
                    A web system supporting Angolan street vendors through data management, developed as part of a socially impactful initiative.
                </p>
            </div>

            {/* Projeto: Cultural Q&A Game (Java) - COM BACKGROUND */}
            <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-angola-black">Cultural Q&A Game (Java)</h3>
                <p className="text-gray-700">
                    A desktop game that promotes Angolan culture and enhances teamwork and OOP skills. Created during my technical studies.
                </p>
            </div>
        </div>
    );
};

export default Projects;
