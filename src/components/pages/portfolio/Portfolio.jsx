
import './Portfolio.css'

export default function Portfolio (){

  return(
    <section className='portfolio'>
      <h2 className='portfolioTitle'>Portfolio</h2>
      <div className='projects'>
        {projects.map(project => (
          <div></div>
        ))}



      </div>



    </section>
  )
}