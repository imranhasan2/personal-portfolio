

import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
const Navbar = () => {
    return (
        <div className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img className='mx-2 w-10' src={logo} alt="" /> */}
                <h1>Imran</h1>
            </div>
            <div className="flex gap-8">
                <h2>Education</h2>
                <h2>Contacts</h2>
                <h2>Projects</h2>
                <h2>Technologies</h2>
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