import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs} from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Technologies = () => {
    return (
        <div id="technologies" className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl"> Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl "></TbBrandNextjs>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"></SiMongodb>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
                </div>
            </div>
        </div>
    );
};

export default Technologies;