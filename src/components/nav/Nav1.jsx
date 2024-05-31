import { NavLink } from 'react-router-dom';
import './Navi.css';



export default function Nav1() {

  return (
    <>
      <h1 className='joel'>Joel Hansen</h1>
      <nav className="navigation">
        <NavLink to = '/'>About Me</NavLink>
        <NavLink to = '/portfolio'>Portfolio</NavLink>
        <NavLink to = '/resume'>Resume</NavLink>
        <NavLink to = '/contact'>Contact</NavLink>
      </nav>

    </>
  )
}

