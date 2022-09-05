import { useRef } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import emailjs from '@emailjs/browser'
import Spline from '@splinetool/react-spline';

const Contact = () => {
    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_1iphtmv', 'template_dtvjysj', refForm.current, 'qt10BNgibKodL32h_'
        ).then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Faild to send, please try again.')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact Me</h1>
                    <p>
                        I am open for Frontend developement freelance jobs as well
                        as part-time Software Engineering jobs. 
                    </p>
                    <p>
                        Also if you are just looking for someone to make a custom web portfolio to boost your 
                        chances in the profetional world then I am also a great choice for you.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'> 
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'> 
                                    <input type="text" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <Spline className='model' scene="https://prod.spline.design/C89pxIERaOB7PLfg/scene.splinecode" />
            </div>
            <Loader type='pacman' />
        </>
    )
}


export default Contact
