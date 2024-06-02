

export default function Project({ project }) {
  return (
    <div className="projectCard">
    
    <h3 className="projectName">{project.name}</h3>
    <a href={project.link} target='_blank' rel='noreferrer'>
        <div className='project' style={{ backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat' }}>
        </div>
      </a>
    <a href={project.github} className="github">Github Repo</a>
    </div>
  );
}