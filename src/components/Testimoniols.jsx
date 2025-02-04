import SectionHead from './SectionHead'
import { ImQuotesLeft } from 'react-icons/im'
import Card from '../UI/Card'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import {testimonials} from '../data.js'
import { useState } from 'react'


const Testimoniols = () => {
    
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]

    const prevTestimoniol = () => {

        setIndex(index - 1)

        if (index <= 0) {

            setIndex(testimonials.length - 1)
        }
    }

    const nextTestimoniol = () => {

        setIndex(index + 1)

        if (index >= testimonials.length - 1) {

            setIndex(0)
        }
    }

    return(

        <section className='testimonials'>

            <div className="container testimonials_container">

                <SectionHead icon={ <ImQuotesLeft /> } title="Testimonials"  className='testimonials_head' />
                <Card className="testimonial">

                    <div className='testimonial_avatar'>

                        <img src={avatar} alt={name} />
                    </div>

                    <p className='testimonial_quote'>{`"${quote}"`} </p>
                    <h5>{name}</h5>
                    <small className='testimonial_title'>{job}</small>
                </Card>

                <div className='testimonials_btn-container'>

                    <button className='testimonials_btn' onClick={prevTestimoniol}><IoIosArrowDropleftCircle /></button>
                    <button className='testimonials_btn' onClick={nextTestimoniol}><IoIosArrowDroprightCircle /></button>
                </div>

            </div>

        </section>
    )
}

export default Testimoniols