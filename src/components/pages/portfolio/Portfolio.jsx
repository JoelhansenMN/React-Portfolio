import projects from '../../../assets/project.json'
import Project from './Project'
import './Portfolio.css'

export default function Portfolio() {

  return (
    <>
    <h2 className='portfolioTitle'>Portfolio</h2>
    <section className='portfolio'>
      
      <div className='projects'>
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>



    </section>
    </>
  )
}