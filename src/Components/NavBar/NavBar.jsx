import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
      <nav className={styles.navBar}>
          <Link 
            to='/'
          >
            Home
          </Link>
          <Link
            to='/about'
          >
            About
          </Link>
          <Link
            to='/projects'
          >
            Projects
          </Link>
          <Link
            to='/resume'
          >
            Resume
          </Link>
          <Link
            to='/contact'
          >
          Contact
          </Link> 
      </nav>
  )
}

export default NavBar