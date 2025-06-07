import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi'; // Ícones do Heroicons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/experience", label: "Experience" },
        { to: "/projects", label: "Projects" },
        { to: "/contact", label: "Contacts" },
    ];

    return (
        <nav className="fixed mt-0 w-full bg-gray-50 font-poppins">
            <div className="px-10 py-5 flex justify-between items-center">
                {/* Nome */}
                <div className="text-black text-lg ">
                    Euclides Baltazar
                </div>

                {/* Botão de menu mobile */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden focus:outline-none text-2xl text-black"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
                </button>

                {/* Menu Desktop */}
                <div className="hidden sm:flex gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="hover:text-yellow-500 transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="sm:hidden absolute top-full left-0 w-full bg-gray-50 flex flex-col items-center gap-4 py-4 z-50 shadow-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={closeMenu}
                            className="w-full text-center hover:text-yellow-500 transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
