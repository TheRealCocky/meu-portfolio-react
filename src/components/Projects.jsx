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

                {/* Project: LeilaoApp (Fullstack Real-Time Auction Platform) */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-2 text-angola-red">
                        LeilaoApp - Real-Time Auction Platform (Fullstack)
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        LeilaoApp is a fullstack real-time auction platform that allows users to create, manage, and participate in live auctions with instant updates.
                        It was designed to simulate a real marketplace where users can bid on products dynamically, with notifications, profiles, and authentication fully integrated.
                        The application is fully responsive, secure, and optimized for both mobile and desktop experiences.
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">My Contribution:</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        I developed the entire platform from the ground up:
                        <br /> - Built the frontend with Next.js, TailwindCSS, and shadcn/ui for a clean and responsive user interface.
                        <br /> - Implemented real-time bidding using <strong>Socket.IO</strong> for instant bid synchronization across all users.
                        <br /> - Designed the backend with NestJS, Prisma, and MongoDB, including all auction, user, and notification logic.
                        <br /> - Integrated authentication, JWT-based sessions, and CORS between Render and Vercel.
                        <br /> - Deployed the backend on Render and the frontend on Vercel, ensuring smooth real-time communication in production.
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Challenges:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Managing real-time bid synchronization using Socket.IO.</li>
                        <li>Ensuring stable WebSocket connections between Render and Vercel in production.</li>
                        <li>Optimizing MongoDB and Prisma relations for performance with complex auction data.</li>
                        <li>Handling CORS and deployment configurations for seamless frontend-backend communication.</li>
                        <li>Building a fully responsive UI that adapts to all screen sizes.</li>
                    </ul>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Technologies:</h4>
                    <p className="text-gray-700 mb-4">
                        Frontend: Next.js 15, Tailwind CSS, shadcn/ui, Socket.IO Client, Vercel <br />
                        Backend: NestJS, Prisma, MongoDB, Socket.IO, Render <br />
                        Tools: GitHub, Postman, Docker, TypeScript
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Links:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>
                            <a
                                href="https://github.com/TheRealCocky/Leilao-client"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Frontend Repository
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/TheRealCocky/Leilao-server"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Backend Repository
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://leilaoapp.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Live Application
                            </a>
                        </li>
                    </ul>
                </div>



                {/* Project: LinkMetrics (Fullstack) */}
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-2 text-angola-red">
                        LinkMetrics - Link Management & Rotation Platform (Fullstack)
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        LinkMetrics is a fullstack application designed for managing, tracking, and rotating links dynamically.
                        It provides an intuitive dashboard for administrators and ensures high availability of links in production.
                        The platform is scalable, secure, and deployed in a cloud environment.
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">My Contribution:</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        I developed both the frontend and backend of the platform:
                        <br /> - Designed the React.js interface with TailwindCSS and shadcn/ui for modern UX.
                        <br /> - Implemented state management and API integration for real-time link actions.
                        <br /> - Built the backend with NestJS, Prisma, and MongoDB, following clean architecture principles.
                        <br /> - Configured CORS, authentication, and link rotation logic.
                        <br /> - Deployed the frontend on Vercel and backend on Render.
                    </p>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Challenges:</h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Managing CORS between Vercel (frontend) and Render (backend).</li>
                        <li>Handling API routes dynamically in production (avoiding localhost references).</li>
                        <li>Optimizing Prisma with MongoDB for high-performance queries.</li>
                        <li>Ensuring zero-downtime deployment and scalability.</li>
                    </ul>

                    <h4 className="text-xl font-semibold mb-2 text-angola-black">Technologies:</h4>
                    <p className="text-gray-700 mb-4">
                        Frontend: Next.js, Tailwind CSS, shadcn/ui, Vercel <br />
                        Backend: NestJS, Prisma, MongoDB, Render <br />
                        Tools: GitHub, Postman, Docker
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
                                Frontend Repository
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/TheRealCocky/LinkMetrics-backend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Backend Repository
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://link-metrics-frontend.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Live Application
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

