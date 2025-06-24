import React from 'react';
import Cocky from '../fotos/cocky.jpeg';
import { Download, Mail } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';
import PDF from '../fotos/EBALTAZAR SEEK Resume(1).pdf';
import Linkdin from '../fotos/linkedin.svg';
import GithubIcon from '../fotos/4747499_github_icon.png';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="pt-24 flex-grow">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md lg:space-x-10">
                    {/* Imagem */}
                    <div>
                        <img
                            src={Cocky}
                            alt="Cocky"
                            className="w-24 sm:w-32 md:w-36 lg:w-40 rounded-full object-cover"
                        />
                    </div>

                    {/* Texto + Botões */}
                    <div className="text-center md:text-left space-y-4 gap-8">
                        <div>
                            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Hi! I'm</p>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-600">
                                Euclides Alimador Baltazar Isaac
                            </h1>
                            <p className="text-md sm:text-lg text-gray-700 mt-3">Web Developer (MERN Stack)</p>
                        </div>

                        {/* Botões */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <a
                                href={PDF}
                                download
                                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                            >
                                <Download size={18} /> Download CV
                            </a>
                            <a
                                href="mailto:euclidesbaltazar2002@icloud.com"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                            >
                                <Mail size={18} /> Contact Info
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://github.com/TheRealCocky"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-yellow-500 transition"
                            >
                                <img src={GithubIcon} alt="Github" className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/euclides-baltazar-456331366/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600 transition"
                            >
                                <img src={Linkdin} alt="Linkedin" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="text-center py-4 text-gray-500">
                &copy; {new Date().getFullYear()} Euclides Baltazar. All rights reserved. Made with React

            </footer>
        </div>
    );
};

export default Home;

