import React from 'react';

const About = () => {
    const skills = {
        "Full-Stack": ["MERN Stack", "React + Vite", "TailwindCSS", "Postman"],
        "Backend": ["Node.js", "Express", "REST APIs","C#"],
        "Databases": ["MongoDB", "SQL", "Advanced administration"],
        "Cybersecurity": ["Nmap", "Nikto", "SSH", "TryHackMe"],
        "UI/UX": ["Figma"],
        "Project Management": ["Agile methodologies"]
    };

    return (
        <div className="max-w-5xl mx-auto p-6 text-gray-800 space-y-10 bg-white rounded mt-2">
            {/* Bio */}
            <section>
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="mb-4">
                    I'm a final-year Computer Engineering student passionate about building digital solutions that solve real-world problems. I’ve worked on meaningful projects such as a university social network and an application for supporting street vendors in Angola.
                </p>
                <p>
                    My ambition is to contribute to innovative and effective technologies that improve lives. I thrive in environments that challenge me to grow technically and personally.
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
            <section>
                <h2 className="text-2xl font-bold mb-4">Education</h2>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Bachelor of Computer Engineering</h3>
                    <p className="text-sm text-gray-600">Kangonjo Polytechnic Institute – Expected Apr 2026</p>
                    <p className="mt-2 text-gray-700">
                        Currently working on the PalancaMedia platform with classmates. Completed MERN Stack training and developed impactful solutions such as ZungeuiraCRUD.
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
    );
};

export default About;

