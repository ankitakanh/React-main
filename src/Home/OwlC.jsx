import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const OwlC = () => {

    const options = {
        // item :5,
        loop: true,
        margin: 120,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    }

    return (

        <>
            <div className='new-product-bg'>
                <div className='App container'>
                    <OwlCarousel className='owl-theme' {...options}>
                        <div>
                            <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/m/3.jpg' className='img-fluid' />
                        </div>
                        <div>
                            <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/m/4.jpg' className='img-fluid' />
                        </div>
                        <div>
                            <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/m/5.jpg' className='img-fluid' />
                        </div>
                        <div>
                            <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/m/6.jpg' className='img-fluid' />
                        </div>
                        <div>
                            <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/m/7.jpg' className='img-fluid' />
                        </div>
                        <div>
                            <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/m/1.jpg' className='img-fluid' />
                        </div>
                        <div>
                            <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/m/2.jpg' className='img-fluid' />
                        </div>
                    </OwlCarousel>

                </div>
            </div>
        </>

    )
}

export default OwlC