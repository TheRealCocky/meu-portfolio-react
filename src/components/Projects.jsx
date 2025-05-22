import React from 'react';

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 ">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>

            {/* Projeto: AngoIA */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2 text-angola-red">AngoIA - Chatbot Especialista em Angola (IA & Frontend)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Chatbot interativo e culturalmente enriquecido sobre a história, cultura, geografia e curiosidades de Angola, impulsionado por IA da Google Gemini.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-angola-black">Minha Contribuição:</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Desenvolvimento completo do frontend com React e Tailwind CSS. Integração com Google Gemini API, engenharia de prompt para especialização em Angola, otimização responsiva e configuração de ambiente/deploy no GitHub.
                </p>

                <h4 className="text-xl font-semibold mb-2 text-angola-black">Desafios:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Integração com API de IA.</li>
                    <li>Design responsivo e culturalmente relevante.</li>
                    <li>Gerenciamento de estado em React.</li>
                </ul>

                <h4 className="text-xl font-semibold mb-2 text-angola-black">Tecnologias:</h4>
                <p className="text-gray-700 mb-4">
                    Frontend: React.js, Vite.js, Tailwind CSS <br/>
                    IA:Google Gemini API (2.0 Flash) <br/>
                    Outros: Git, GitHub, WebStorm
                </p>

                <h4 className="text-xl font-semibold mb-2 text-angola-black">Links:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><a href="https://github.com/TheRealCocky/AngoIA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Repositório GitHub</a></li>
                    <li><a href="https://angoia.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">angoia.com</a></li>
                    {/* <li><a href="LINK_PARA_DEMO_ONLINE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Demo Online</a></li> */}
                </ul>
            </div>

            {/* Projeto: PalancaMedia - COM BACKGROUND */}
            <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-angola-black">PalancaMedia</h3>
                <p className="text-gray-700">
                    A university multimedia platform built with React, Node.js, Express and MongoDB. It includes an advanced CMS and features for video, audio, document sharing, and quizzes. Developed in collaboration with my 4th-year classmates. The platform is already online and accessible.
                </p>
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
