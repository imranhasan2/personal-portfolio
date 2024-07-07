import { PROJECTS } from "../../constants";


const Projects = () => {
    return (
        <div id="projects" className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((project, idx) => {
                    return (
                        <div className="mb-8 flex flex-wrap lg:justify-center" key={idx}>
                            <div className="w-full lg:w-1/4">
                                <img
                                    src={project.image}
                                    width={150}
                                    height={150}
                                    alt="" />
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">{project.title}</h6>
                                <p className="mb-4 text-neutral-400 ">{project.description}</p>
                                {project.technologies.map((tech, idx) => (
                                    <span className="mr-2 rounded bg-neutral-900" key={idx}>
                                        {tech}
                                    </span>
                                ))}
                                <div>
                                    <button onClick={() => window.open(project.live, '_blank')} className="text-white mt-4 bg-yellow-600 px-3 py-1 rounded-xl mr-4">Go live</button> 
                                
                                    <button onClick={() => window.open(project.client, '_blank')} className="text-white mt-4 bg-yellow-600 px-3 py-1 rounded-xl mr-4">Github Client</button> 
                                
                                    <button onClick={() => window.open(project.github, '_blank')} className="text-white mt-4 bg-yellow-600 px-3 py-1 rounded-xl">Github Server</button> 
                                </div>
                            </div>

                        </div>)
                })}
            </div>
        </div>
    );
};

export default Projects;