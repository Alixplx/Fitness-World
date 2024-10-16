import React from 'react'
import './Home.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimoniols from '../../components/Testimoniols'


const Home = () => {

    return(

        <>
        
            <MainHeader />
            <Programs />
            <Values />
            <FAQs />
            <Testimoniols />
        </>
    )
}

export default Home