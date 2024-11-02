import React from 'react'
import './LatestNews.css'
import OwlC from './OwlC'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const LatestNews = () => {
    return (
        <>

            <section className='new-product-bg lNews-sec d-none d-lg-block'>
                <div className='container ln-cont'>
                    <div>
                        <div className='d-flex justify-content-center align-item-center widthDiv'>
                            <div className='ln-img-bg wrapper-ln'>
                                <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/modules//smartblog/views/img/1-single-default.jpg' className='img-fluid lNews-img' />
                                <div className='middle'>
                                    <div className='textZ'><FontAwesomeIcon icon={faMagnifyingGlass} className='textX'/></div>
                                </div>
                            </div>

                            <div className='ln-white-bg'>
                                <div className='blackBorder'>
                                    <p className='jul-30'>30 Jul 2019</p>
                                    <h4 className='ln-h4'>Lorem Ipsum Dolor Sit...</h4>
                                    <p className='ln-para'>Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean...</p>
                                    <div className='readMore-but-div'>
                                        <button type='button' className='readMore-but'><span className='button-contentY'>Read More</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='d-flex justify-content-center align-item-center widthDiv'>
                            <div className='ln-white-bg'>
                                <div className='blackBorder'>
                                    <p className='jul-30'>30 Jul 2019</p>
                                    <h4 className='ln-h4'>Upon Of Seasons Earth...</h4>
                                    <p className='ln-para'>Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean...</p>
                                    <div className='readMore-but-div'>
                                        <button type='button' className='readMore-but'><span className='button-contentY'>Read More</span></button>
                                    </div>
                                </div>
                            </div>
                            <div className='ln-img-bg wrapper-ln'>
                                <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/modules//smartblog/views/img/2-single-default.jpg' className='img-fluid lNews-img' />
                                <div className='middle'>
                                    <div className='textZ'><FontAwesomeIcon icon={faMagnifyingGlass} className='textX'/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <OwlC />

        </>
    )
}

export default LatestNews