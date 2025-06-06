import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <main className='pt-24 min-h-screen'>
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-2">
                    <Mail size={20} /> euclidesbaltazar2002@gmail.com
                </li>
                <li className="flex items-center gap-2">
                    <Phone size={20} /> +244 945303860
                </li>
                <li className="flex items-center gap-2">
                    <Linkedin size={20} />
                    <a href="https://www.linkedin.com/in/euclides-baltazar-456331366/" target="_blank" className="hover:underline text-gray-800">
                        LinkedIn
                    </a>
                </li>
                <li className="flex items-center gap-2">
                    <Github size={20} />
                    <a href="https://github.com/TheRealCocky" target="_blank" className="hover:underline text-gray-800">
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
        </main>
    );
};

export default Contact;
