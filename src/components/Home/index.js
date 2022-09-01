import { Link } from 'react-router-dom'
import './index.scss';
import Logo from './Logo';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br /> I'm 
                    <span className='text_shadows'>M</span>ouad Berqia
                    <br/>
                    Web Developer
                </h1>
                <h2>Frontend Developer / Computer Science Student / Competitive Programmer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home