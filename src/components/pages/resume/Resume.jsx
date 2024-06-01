import './Resume.css';
import resumefile from '../../../assets/resume.pdf'
export default function Resume() {

  return (

    <>
      <div className='resume'>
        <h2 className='resumeTitle'>Resume</h2>
        <a href={resumefile} download='/' target='_blank' rel='noreferrer' className='resumeBTN'>
          <button>Click Here to Download My Resume</button>
        </a>
        </div>

        <div className='skills'>
          <ul className='frontend'>
            <h3>Front-End Skills</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>jquery</li>
            <li>React</li>
          </ul>

          <ul className='backend'>
            <h3>Back-End Skills</h3>
            <li>Node.js</li>
            <li>APIs</li>
            <li>Mongo/Mongoose</li>
            <li>PostgeSQL/Sequelize</li>
            <li>Express.js</li>
          </ul>
        </div>
      
    </>
  )
}