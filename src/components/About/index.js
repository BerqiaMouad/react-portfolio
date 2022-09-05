import { faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiTypescript, SiCplusplus, SiTensorflow } from "react-icons/si";
import Loader from 'react-loaders';
import './index.scss'

const About = () => {
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>About Me</h1>
                    <p>
                        Dedicated Front-End Developer with
                        experience in achieving tangible
                        results and cross-team collaboration.
                        Proactive and excited to partner with
                        like-minded individuals to achieve
                        goals. 
                    </p>
                    <p>
                        Also, besides Front-End
                        Development, I am a <span>competitive
                        programmer</span> (CP) who won many
                        national competitions that means I am a really good <span>problem solver</span>.
                    </p>
                    <p>
                        I have a huge interest in machine learning as well, and I have some experience
                        using ML libraries like <span>Numpy, Scikit-learn and Tensorflow</span> and some Supervised learning 
                        concepts along with a few <span>Neural Networks</span> applications.
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#05427c" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faPython} color="#fbcb24" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faSass} color="#cc6699" />
                        </div>
                        <div className='face4'>
                            <SiTypescript color='#007acc' />
                        </div>
                        <div className='face5'>
                            <SiCplusplus color='blue' />
                        </div>
                        <div className='face6'>
                            <SiTensorflow color='orange' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default About;
