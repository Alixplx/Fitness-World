import Header from '../../components/Header'
import headerImage from '../../assets/header_bg_3.jpg'
import './Gallery.css'

const Gallery = () => {

    const galleryLength = 15
    const images = []

    for (let i = 1; i <= galleryLength; i++) {

        images.push(require(`../../assets/gallery${i}.jpg`))
    }

    return(

        <>
        
            <Header title="Our Gallery" image={headerImage}>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam eaque quasi, 
                veniam quis veritatis odit vero in dolore fuga!
            </Header>

            <section className='gallery'>

                <div className="container gallery_container">
        
                    {

                        images.map((image, index) => {

                            return(

                                <article key={index}>

                                    <img src={image} alt="Gallery Image" />
                                </article>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default Gallery