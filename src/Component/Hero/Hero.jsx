import { HERO_CONTENT } from "../../constants";
import profilepic from '../../assets/profile-removebg-preview-removebg-preview.png'

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Imran</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Frontend Developer</span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</p>

                        <a href="https://drive.google.com/file/d/1nqDSGwaEQp_Ua_q4WWq5ZDSF2YwGQdLN/view" download>
                            <button className="py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Resume
                            </button>
                        </a>
                    </div>

                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilepic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;