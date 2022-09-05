import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoSource from '../../assets/images/logo-s2.png';
import LogoSub from '../../assets/images/logo_sub2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={ LogoSource } alt='Logo' />
            <img className='sub-logo' src={LogoSub} alt='Logo Subtitle' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={ faUser } color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={ faEnvelope } color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/berqiamouad/'>
                    <FontAwesomeIcon icon={ faLinkedin } color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/BerqiaMouad'>
                    <FontAwesomeIcon icon={ faGithub } color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.hackerrank.com/berqiamouad'>
                    <FontAwesomeIcon icon={ faHackerrank } color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar