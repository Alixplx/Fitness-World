import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"


const Footer = () => {
  
    return(
        
        <footer>

            <div className="container footer_container">

                <article>

                    <Link to="/" className="logo"> <img src={Logo} /> </Link>
                    <p>

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Molestiae expedita alias nemo et ullam neque ipsa autem voluptatibus odit commodi?
                    </p>

                    <div className="footer_socials">

                        <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"> <FaLinkedin /> </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"> <FaFacebookF /> </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"> <AiFillInstagram /> </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"> <AiOutlineTwitter /> </a>
                    </div>
                </article>

                <article>

                    <h4>PermaLinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainer'>Trainers</Link>
                    <Link to='/contact'>Contact</Link>
                </article>

                <article>

                    <h4>Insights</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Events</Link>
                    <Link to='/s'>Communities</Link>
                    <Link to='/s'>FAQs</Link>
                </article>

                <article>

                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/s'>Support</Link>
                </article>
            </div>
            
            <div className="footer_copyright">

                <small>2024 Fitness World &copy; All Rights Reserved</small>
            </div>

        </footer>
    )

}

export default Footer