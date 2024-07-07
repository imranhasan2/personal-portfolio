

import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <div className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img className='mx-2 w-10' src={logo} alt="" /> */}
                <h1>Imran</h1>
            </div>
            <div className="flex gap-8 p-4 rounded-lg  ">
                <Link
                    to="education"
                    smooth={true}
                    duration={500}
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 cursor-pointer"
                >
                    Education
                </Link>
                <Link
                    to="contacts"
                    smooth={true}
                    duration={500}
                    className="text-lg font-semibold text-green-600 hover:text-green-800 transition-colors duration-200 cursor-pointer"
                >
                    Contacts
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="text-lg font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-200 cursor-pointer"
                >
                    Projects
                </Link>
                <Link
                    to="technologies"
                    smooth={true}
                    duration={500}
                    className="text-lg font-semibold text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer"
                >
                    Technologies
                </Link>
            </div>

            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin></FaLinkedin>
                <FaGithub></FaGithub>
                <FaInstagram></FaInstagram>
            </div>
        </div>
    );
};

export default Navbar;