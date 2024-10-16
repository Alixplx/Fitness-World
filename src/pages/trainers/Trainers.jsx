import Header from '../../components/Header'
import './Trainers.css'
import headerImage from '../../assets/header_bg_5.jpg'
import {trainers} from '../../data.js'
import Trainer from '../../components/Trainer.jsx'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'


const Trainers = () => {

    return(

        <>

            <Header title="Our Trainers" image={headerImage}>

                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nesciunt aliquid maiores maxime est vero libero 
                asperiores corrupti quo commodi?
            </Header>

            <section className='trainers'>

                <div className="container trainers_container">

                    {

                        trainers.map(({id, image, name, job, socials}) => {

                            return(

                                <Trainer key={id} image={image} name={name} job={job} socials={

                                    [
    
                                        {icon: <BsInstagram />, link: socials[0]},
                                        {icon: <AiOutlineTwitter />, link: socials[1]},
                                        {icon: <FaFacebookF />, link: socials[2]},
                                        {icon: <FaLinkedinIn />, link: socials[3]}
                                    ]
                                } />
                            )
                        })
                    }
                    
                </div>

            </section>

        </>
    )
}

export default Trainers