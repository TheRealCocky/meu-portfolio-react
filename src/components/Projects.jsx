import React from 'react';

const Projects = () => {
    return (
        <main className='min-h-screen pt-24'>
            <div className="max-w-5xl mx-auto p-6 ">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>

                {/* Project: AngoIA */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-2 text-angola-red">
                        AngoIA - Angola Expert Chatbot (Fullstack AI Application)
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        AngoIA is a fullstack artificial intelligence application built to answer questions about Angola with depth and cultural context. It goes beyond a traditional chatbot, offering a complete experience with features such as access plan control, automatic language moderation, favorites, interaction history, answer sharing, and user authentication. All intelligence is powered by Google’s Gemini API, with custom prompt engineering to make the AI specialized in Angolan topics.
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">My Contribution:</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Full frontend development using React and Tailwind CSS. Integration with the Google Gemini API, prompt engineering focused on local context, backend architecture with Node.js and Express, implementation of authentication logic, access limit control by plan, answer feedback system, and deployment via GitHub, Vercel (frontend), and Render (backend).
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Challenges:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Stable integration with an external natural language AI API.</li>
                        <li>Creating a backend with authentication and access plan control.</li>
                        <li>Developing a responsive interface with a user experience focused on local culture.</li>
                        <li>Migrating the entire project to a more scalable architecture with TypeScript, Next.js, and NestJS for better maintainability and performance.</li>
                    </ul>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Technologies:</h4>
                    <p className="text-gray-700 mb-4">
                        Frontend: React.js, Vite.js, Tailwind CSS <br />
                        Backend: Node.js, Express.js, MongoDB <br />
                        AI: Google Gemini API (2.0 Flash) <br />
                        Deployment: Vercel (frontend), Render (backend), GitHub
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Links:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li><a href="https://github.com/TheRealCocky/AngoIA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository</a></li>
                        <li><a href="https://angoia.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">angoia.com</a></li>
                    </ul>
                </div>

                {/* Project: LinkMetrics Frontend */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-2 text-angola-red">
                        LinkMetrics Frontend (Dashboard & UI for Link Analytics)
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The frontend interface for LinkMetrics — a dashboard for creating, rotating, and tracking URLs with metrics. Built to interact with the backend API, display usage charts, manage links, and provide a responsive and intuitive UI.
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">My Contribution:</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Developed the entire frontend using React (Next.js / App Router) and Tailwind CSS. Integrated API calls, managed authentication flow, built dynamic charts using Recharts, implemented copy/rotate/delete actions, sidebar navigation, and state management for UI logic.
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Challenges:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Implementing dynamic routing and client-only hooks (useSearchParams) in Next.js.</li>
                        <li>Ensuring CORS and environment variable handling for production deployment.</li>
                        <li>Keeping UI responsive across mobile and desktop layouts.</li>
                        <li>Synchronizing real-time metrics updates without degrading performance.</li>
                    </ul>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Technologies:</h4>
                    <p className="text-gray-700 mb-4">
                        Frontend: Next.js, React, Tailwind CSS, Recharts, Lucide Icons <br />
                        Tools: Vercel (hosting), Environment variables, localStorage for token handling
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Links:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>
                            <a
                                href="https://github.com/TheRealCocky/LinkMetrics-frontend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub Repository
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://link-metrics-frontend.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Live Demo
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Project: LinkMetrics Backend */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-2 text-angola-red">
                        LinkMetrics Backend (API, Rotation & Metrics)
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Backend service for LinkMetrics — implements authentication (JWT), link creation and rotation logic, metrics collection and history, and secure REST endpoints consumed by the frontend. Built with NestJS + Prisma and MongoDB, optimized for production deployment on Render.
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">My Contribution:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Designed and implemented REST API endpoints (auth, links, metrics, history).</li>
                        <li>Implemented link rotation logic with weighted distribution and tracking.</li>
                        <li>Integrated Prisma with MongoDB Atlas for data modeling and queries.</li>
                        <li>Added JWT-based authentication and token handling.</li>
                        <li>Configured CORS, environment variables and production-ready deployment on Render.</li>
                        <li>Wrote automated scripts and Prisma migrations to keep schema consistent.</li>
                    </ul>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Challenges:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Handling CORS correctly across environments (local / Vercel / Render).</li>
                        <li>Designing efficient metrics storage and retrieval for large numbers of clicks.</li>
                        <li>Ensuring secure token issuance and validation (JWT configuration).</li>
                        <li>Deploying with environment-specific configuration and secrets management.</li>
                    </ul>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Technologies:</h4>
                    <p className="text-gray-700 mb-4">
                        Backend: NestJS, Prisma, MongoDB Atlas <br />
                        Tools: Render (hosting), JWT, Node.js, TypeScript, Prisma Studio
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Links:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>
                            <a
                                href="https://github.com/TheRealCocky/LinkMetrics-backend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub Repository
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkmetrics-backend.onrender.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Live API
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Project: EventosParticipantes API */}
                <div className="mb-6 p-6 bg-white rounded-lg shadow-lg space-y-4">
                    <h3 className="text-2xl font-semibold text-angola-black">EventosParticipantes API</h3>
                    <p className="text-gray-700">
                        EventosParticipantes is a clean, fully functional RESTful API built with .NET 8 and C#. It allows for creating, reading, updating, and deleting events and participants, while managing associations between them. The API is fully documented with Swagger and was built with deployment in mind, using Docker and Render.
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">My Contribution:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Designed and implemented the entire Web API using .NET 8 and C#.</li>
                        <li>Created modular routes with clear separation between events and participants.</li>
                        <li>Configured MongoDB (Atlas) for persistence with dependency injection.</li>
                        <li>Integrated Swagger for API documentation and testing.</li>
                        <li>Containerized the application using Docker and Docker Compose.</li>
                        <li>Deployed the project on Render with environment variable support.</li>
                    </ul>

                    <h4 className="text-xl font-semibold text-angola-black">Challenges Faced:</h4>
                    <p className="text-gray-700 mb-4">
                        I originally intended to use PostgreSQL for this project to better reflect relational modeling. However, due to Render’s requirement for a Visa card to enable PostgreSQL services, I pivoted to MongoDB Atlas, which allowed me to deploy faster and without cost barriers. Despite the change, I maintained clean separation of concerns and followed RESTful design principles.
                    </p>

                    <h4 className="text-xl font-semibold">Technologies:</h4>
                    <p className="text-gray-700 mb-4">
                        Backend: .NET 8 (C#), MongoDB Atlas<br />
                        Tools: Swagger, Docker, Docker Compose<br />
                        Hosting: Render<br />
                        Others: Git, GitHub, Visual Studio Code, Postman
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Links:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>
                            <a
                                href="https://github.com/TheRealCocky/eventoparticipante"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub Repository
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://eventos-api-i2qr.onrender.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Live API (Swagger UI)
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Project: Joamacina Comercial */}
                <div className="mb-6 p-6 bg-white rounded-lg shadow-lg space-y-4">
                    <h3 className="text-2xl font-semibold text-angola-black">Joamacina Comercial</h3>
                    <p className="text-gray-700">
                        Official website built for the Angolan company Joamacina Comercial. The platform showcases the company’s services, mission, and contact details in a modern and responsive design focused on a strong professional online presence.
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">My Contribution:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Designed and developed the interface using React.js with Vite and Tailwind CSS.</li>
                        <li>Built a fully responsive layout optimized for mobile and desktop devices.</li>
                        <li>Added smooth animations and clean navigation between sections.</li>
                        <li>Structured the project for scalability and maintainability.</li>
                        <li>Configured the GitHub repository and deployed the site to Vercel.</li>
                    </ul>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Challenges Faced:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Setting up SSH authentication for GitHub to enable seamless deployment.</li>
                        <li>Resolving missing module errors during Vercel build (e.g., <code>react-router-dom</code> and <code>react-icons</code>).</li>
                        <li>Ensuring consistent cross-browser layout rendering using Tailwind utility classes.</li>
                        <li>Debugging deployment errors related to Vite’s handling of dynamic imports.</li>
                    </ul>

                    <h4 className="text-xl font-semibold">Technologies Used:</h4>
                    <p className="text-gray-700 mb-4">
                        Frontend: React.js, Vite, Tailwind CSS <br />
                        Deployment: Vercel <br />
                        Version Control: Git & GitHub
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Links:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>
                            <a
                                href="https://github.com/TheRealCocky/JoamacinaLda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub Repository
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://joamacinacomercial.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                joamacinacomercial.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Project: PalancaMedia */}
                <div className="mb-6 p-6 bg-white rounded-lg shadow-lg space-y-4">
                    <h3 className="text-2xl font-semibold text-angola-black">PalancaMedia</h3>
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



            </div>
        </main>
    );
};

export default Projects;

