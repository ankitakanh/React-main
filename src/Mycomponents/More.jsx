import React from 'react'
import NewOnces from '../Home/NewOnces.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChartSimple, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'

const More = (props) => {
    const data = props.more
    return (
        <>
            <NewOnces />
            <section className='new-product-bg lNews-sec d-none d-xl-block'>
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

            <section>
            <div className='new-product-bg padiingB'>
                <div className='container'>
                    <div>
                        <div className='d-flex justify-content-center align-items-center text-center'>
                            <h3 className='treanding-prods'>TRENDING PRODUCTS</h3>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ontario_Northland_Wayfinder.svg/354px-Ontario_Northland_Wayfinder.svg.png' width={90} height={20} />
                        </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        {
                            data.map((ele) => {
                                return (
                                    <div className='col-12 col-md-6 col-lg-3 text-center mt-3 mt-lg-0 mt-md-0 p-3'>
                                        <div className='bg-light'>
                                            <div className='wrapper'>
                                                <img src={ele.img} className='img-fluid image' />
                                                <div className='middle'>
                                                    <div className='text'>
                                                    <div className='px-2 flip-vertical-right'><FontAwesomeIcon icon={faCartShopping} /></div>  
                                                    <div className='px-2 flip-vertical-right'><FontAwesomeIcon icon={faHeart} /></div>  
                                                    <div className='px-2 flip-vertical-right'><FontAwesomeIcon icon={faChartSimple} /></div>  
                                                    <div className='px-2 flip-vertical-right'><FontAwesomeIcon icon={faEye} /></div>  
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='new-product-bg px-2 py-2'>
                                                <h5 className='philosopher-h'>{ele.title}</h5>
                                                <p><span className='fw-bold philosopher'>{ele.price}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-danger philosopher'>{ele.span}</span>&nbsp;&nbsp;&nbsp;<del className='philosopher'>{ele.del}</del></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            </section>
        </>
    )
}

export default More