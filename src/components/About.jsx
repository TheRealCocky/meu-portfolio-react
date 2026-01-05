import React from 'react';

const About = () => {
    const skills = {
        "Frontend / Full-Stack": [
            "Next.js (React)",
            "TypeScript",
            "TailwindCSS",
            "MERN Stack"
        ],
        "Backend": [
            "Node.js",
            "NestJS",
            "Fastify",
            "REST APIs",
            "C# / ASP.NET Core"
        ],
        "Databases": [
            "MongoDB",
            "PostgreSQL",
            "Database Management & Administration"
        ],
        "UI/UX & Design": [
            "Figma"
        ],
        "Project Management": [
            "Agile Methodologies",
            "Scrum / Kanban"
        ],
        "DevOps & Deployment": [
            "Docker",
            "Docker Compose",
            "CI/CD",
            "AWS",
            "Vercel",
            "Render",
            "GitHub Actions"
        ],
        "Tools": [
            "Postman",
            "Git & GitHub"
        ]
    };



    return (
        <mai className='pt-24 min-h-screen'>
            <div className="max-w-5xl mx-auto p-6  ">

            <h2 className="text-3xl font-bold mt-24 mb-4">About Me</h2>
            {/* Bio */}
                <div className="max-w-5xl mx-auto p-6 text-gray-800 space-y-10 bg-white rounded  mb-0 ">
            <section className="mt-10">

                <p className="mb-4">
                    I am a final-year Computer Engineering student at ISP Katangonji, specializing in full-stack development with a focus on building digital products with real social impact. Currently, I am developing <a className="underline hover:text-yellow-500 transition" target="_blank" rel="noopener noreferrer"
                    href="https://nonhande.vercel.app">Nonhande</a>, a digital preservation platform for the Nhaneca-Humbe language, where I apply Next.js, NestJS, and MongoDB to transform complex ethnolinguistic data into scalable and intuitive digital experiences.  </p>
                <p>
                    My ambition is to bridge the gap between advanced technology and local context, integrating artificial intelligence through projects like AngoIA to solve problems that matter. I thrive in environments that challenge me to grow technically—applying clean code and architectural best practices—while delivering innovative solutions that improve lives
                </p>
            </section>

            {/* Skills */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                {Object.entries(skills).map(([category, list]) => (
                    <div key={category} className="mb-4">
                        <h3 className="text-xl font-semibold">{category}</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {list.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Education */}
            <section className="">
                <h2 className="text-2xl font-bold mb-4">Education</h2>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Computer Engineering graduate</h3>
                    <p className="text-sm text-gray-600">Institute Polytechnic Katangoji(Angola) – Expected Apr 2026</p>
                    <p className="mt-2 text-gray-700">
                        I am a <strong>final-year Computer Engineering student</strong> at the Institute Polytechnic Katangoji, enrolled in a program that emphasizes the <strong>complete software development lifecycle</strong> — from <strong>requirements gathering</strong> and <strong>system design</strong> to <strong>implementation</strong>, <strong>testing</strong>, and <strong>maintenance</strong>.
                        This foundation has driven my involvement in impactful projects such as <strong>PalancaMedia</strong>, a collaborative university multimedia platform with advanced CMS features, and <strong>ZungeuiraCRUD</strong>, a system designed to support Angolan street vendors through data management.
                        More recently, I built <strong>AngoIA</strong>, a fullstack <strong>AI-powered application</strong> specialized in answering questions about Angola with cultural depth, powered by <strong>Google’s Gemini API</strong> and featuring <strong>authentication</strong>, <strong>plan-based access control</strong>, <strong>moderation</strong>, and <strong>user interaction history</strong>.
                    </p>


                </div>

                <div>
                    <h3 className="text-xl font-semibold">Diploma in Applied Informatics to Management</h3>
                    <p className="text-sm text-gray-600">Lubango Medium Institute of Economics – 2017 to 2020</p>
                    <p className="mt-2 text-gray-700">
                        Focused on business-oriented IT systems and database management. Graduated with top marks in Programming and ICT (16/20), and co-developed an educational Java game on Angolan culture.
                    </p>
                </div>
            </section>
        </div>
                </div>
        </mai>
    );
};

export default About;


