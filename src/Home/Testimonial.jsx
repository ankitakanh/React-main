import React from 'react'
import './Testimonial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Testimonial = () => {
    return (
        <>
            <section className='testiSection d-none d-md-block'>
                <div className=' padiingB'>
                    <div className='container'>
                        <div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <h3 className='treanding-prods text-light'>TESTIMONIALS</h3>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ontario_Northland_Wayfinder.svg/354px-Ontario_Northland_Wayfinder.svg.png' width={90} height={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className='container gridContainer mb-5 cauX'>
                                    <div className='d-flex justify-content-between align-item-center'>
                                        <div className='img-hp'>
                                            <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/cms/user3.jpg' className='test-img' />
                                            <div className='testi-h-div'>
                                                <h4 className='text-light johnDeo'>John Deo</h4>
                                                <p className='text-light ceo'>CEO & Founder</p>
                                            </div>
                                        </div>
                                        <div className='quotes d-md-none d-xl-block'>
                                            <div className='verticalLine'></div>
                                            <div className='quote-yello'>
                                                <FontAwesomeIcon icon={faQuoteLeft}  className='qut-icon'/>
                                            </div>
                                        </div>
                                        <p className='text-light testi-para'>"Duis Faucibus Enim Vitae Nunc Molestie, Arcu Facilisis Arcu Nullam
                                            Mattis Faucibus Enim Vitae Nunc Molestie, Need Arcu Nullam
                                            Bibendum, Vitae Nunc Molestie, Nec Nec Arcu Nullam Bibendum Aac."</p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                            <div className='container gridContainer mb-5 cauX'>
                                    <div className='d-flex justify-content-between align-item-center'>
                                        <div className='img-hp'>
                                            <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/cms/user1.jpg' className='test-img' />
                                            <div className='testi-h-div'>
                                                <h4 className='text-light johnDeo'>John Deo</h4>
                                                <p className='text-light ceo'>CEO & Founder</p>
                                            </div>
                                        </div>
                                        <div className='quotes d-md-none d-xl-block'>
                                            <div className='verticalLine'></div>
                                            <div className='quote-yello'>
                                                <FontAwesomeIcon icon={faQuoteLeft}  className='qut-icon'/>
                                            </div>
                                        </div>
                                        <p className='text-light testi-para'>"Duis Faucibus Enim Vitae Nunc Molestie, Arcu Facilisis Arcu Nullam
                                            Mattis Faucibus Enim Vitae Nunc Molestie, Need Arcu Nullam
                                            Bibendum, Vitae Nunc Molestie, Nec Nec Arcu Nullam Bibendum Aac."</p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                            <div className='container gridContainer mb-5 cauX'>
                                    <div className='d-flex justify-content-between align-item-center'>
                                        <div className='img-hp'>
                                            <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/cms/user2.jpg' className='test-img' />
                                            <div className='testi-h-div'>
                                                <h4 className='text-light johnDeo'>John Deo</h4>
                                                <p className='text-light ceo'>CEO & Founder</p>
                                            </div>
                                        </div>
                                        <div className='quotes d-md-none d-xl-block'>
                                            <div className='verticalLine'></div>
                                            <div className='quote-yello'>
                                                <FontAwesomeIcon icon={faQuoteLeft}  className='qut-icon'/>
                                            </div>
                                        </div>
                                        <p className='text-light testi-para'>"Duis Faucibus Enim Vitae Nunc Molestie, Arcu Facilisis Arcu Nullam
                                            Mattis Faucibus Enim Vitae Nunc Molestie, Need Arcu Nullam
                                            Bibendum, Vitae Nunc Molestie, Nec Nec Arcu Nullam Bibendum Aac."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial