import React from 'react';

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>

            <div className="mb-6">
                <h3 className="text-xl font-semibold">PalancaMedia</h3>
                <p className="text-gray-700">
                    A university multimedia platform built with React, Node.js, Express and MongoDB. It includes an advanced CMS and features for video, audio, document sharing, and quizzes. Developed in collaboration with my 4th-year classmates. The platform is already online and accessible.
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold">ZungeuiraCRUD</h3>
                <p className="text-gray-700">
                    A web system supporting Angolan street vendors through data management, developed as part of a socially impactful initiative.
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold">Cultural Q&A Game (Java)</h3>
                <p className="text-gray-700">
                    A desktop game that promotes Angolan culture and enhances teamwork and OOP skills. Created during my technical studies.
                </p>
            </div>
        </div>
    );
};

export default Projects;
