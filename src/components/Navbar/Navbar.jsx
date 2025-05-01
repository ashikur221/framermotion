import React from 'react';
import Logo from "../../assets/logo.png"
import { motion } from "motion/react"
import { a, link } from 'motion/react-client';

const NavLinks = [
    {
        id: 1,
        title: "About",
        link: "#",
    },
    {
        id: 2,
        title: "Service",
        link: "#"
    },
    {
        id: 3,
        title: "Projects",
        link: "#"
    },
    {
        id: 4,
        title: "Contact",
        link: "#"
    }
]


const Navbar = () => {
    return (
        <>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{duration: 0.8}}
                className="container  mx-auto py-6 flex justify-between items-center">
                {/* Logo section  */}
                <div className="flex items-center gap-3">
                    <img src={Logo} className='w-10' alt="" />
                    <span className="text-2xl font-bold">Interior</span>
                </div>

                {/* Link section  */}
                <div className="hidden md:block space-x-12">
                    {
                        NavLinks.map(link => {
                            return (
                                <a
                                    href={link.link}
                                    className='inline-block mx-4 text-lg font-semibold'
                                >
                                    {link.title}
                                </a>
                            )
                        })
                    }
                </div>

                {/* Button section  */}
                <div>
                    <button className="primary-btn">Try For Free</button>
                </div>

            </motion.div>
        </>
    );
};

export default Navbar;