import Header from '../../components/Header'
import headerImage from '../../assets/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './Contact.css'


const Contact = () => {

    return(

        <>

            <Header title="Get In Touch" image={headerImage}>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam iure voluptates in repudiandae asperiores 
                saepe ea tenetur, nobis debitis ab!
            </Header>

            <section className='contact'>

                <div className="container contact_container">

                    <div className="contact_wrapper">

                        <a href="mailto:support@me.com" target='_blank' rel='noreferrer noopener'> <MdEmail /> </a>
                        <a href="http://m.me/ernest_achiever" target='_blank' rel='noreferrer noopener'> <BsMessenger /> </a>
                        <a href="https://wa.me/+12234567" target='_blank' rel='noreferrer noopener'> <IoLogoWhatsapp /> </a>
                    </div>
                </div>
                
            </section>

        </>
    )
}

export default Contact