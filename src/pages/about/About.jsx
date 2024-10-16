import React from 'react'
import './About.css'
import Header from '../../components/Header'
import headerImage from '../../assets/header_bg_1.jpg'
import storyImage from '../../assets/about1.jpg'
import visionImage from '../../assets/about2.jpg'
import missionImage from '../../assets/about3.jpg'


const About = () => {
    
    return(

        <>

            <Header image={headerImage}  title="About Us">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi 
                dignissimos eligendi nisi. Eum alias est voluptatem?
            </Header>

            <section className='about_story'>

                <div className="container about_story-container">

                    <div className="about_section-image">

                        <img src={storyImage} alt="Story Image" />
                    </div>

                    <div className="about_section-content">

                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi 
                            dignissimos eligendi nisi. Eum alias est voluptatem? dignissimos eligendi.alias est voluptatem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi 
                            dignissimos eligendi nisi. Eum alias est voluptatem? dignissimos eligendi.alias est voluptatem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi 
                            dignissimos eligendi nisi. Eum alias est voluptatem? dignissimo
                        </p>
                    </div>
                </div>
            </section>

            <section className='about_vision'>

                <div className="container about_vision-container">

                    <div className="about_section-content">

                        <h1>Vision Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi 
                            dignissimos eligendi nisi. Eum alias est voluptatem? dignissimos eligendi.alias est voluptatem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi 
                            dignissimos eligendi nisi. Eum alias est voluptatem? dignissimos eligendi.alias est voluptatem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi
                        </p>
                    </div>

                    <div className="about_section-image">

                        <img src={visionImage} alt="Vision Image" />
                    </div>
                </div>
            </section>

            <section className='about_mission'>

                <div className="container about_mission-container">

                    <div className="about_section-image">

                        <img src={missionImage} alt="Mission Image" />
                    </div>

                    <div className="about_section-content">

                        <h1>Our Mission</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi 
                            dignissimos eligendi nisi. Eum alias est voluptatem? dignissimos eligendi.alias est voluptatem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi 
                            dignissimos eligendi nisi. Eum alias est voluptatem? dignissimos eligendi.alias est voluptatem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores non minus sequi 
                            dignissimos eligendi nisi. Eum alias est voluptatem? dignissimo
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About