import './Resume.css';
import resumefile from '../../../assets/resume.pdf'

export default function Resume() {

  return (

    <div className='resume'>
      <div>
        <h2 className='resumeTitle'>Resume</h2>
        <a href={resumefile} download='/' target='_blank' rel='noreferrer' >
          <button className='resumeBtn'>Click Here to Download My Resume</button>
        </a>
        </div>

        <div className='skills'>
          <ul className='frontend'>
            <h3 className='FESkills'>Front-End Skills</h3>
            <li className='skill'>HTML</li>          
            <li className='skill'>CSS</li>
            <li className='skill'>Bootstrap</li>
            <li className='skill'>Javascript</li>
            <li className='skill'>jquery</li>
            <li className='skill'>React</li>
          </ul>

          <ul className='backend'>
            <h3 className='BESkills'>Back-End Skills</h3>
            <li className='skill'>Node.js</li>
            <li className='skill'>APIs</li>
            <li className='skill'>Mongo/Mongoose</li>
            <li className='skill'>PostgeSQL/Sequelize</li>
            <li className='skill'>Express.js</li>
            <li className='skill'>REST</li>
          </ul>
        </div>
      
    </div>
  )
}