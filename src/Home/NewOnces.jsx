import React from 'react'
import './NewOnces.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'


const NewOnces = () => {

    const imgOne = 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/modules/tt_banner/views/img/077770d72223b89e43f1c566723e429340bb2480_banner-01.jpg';

    const imgTwo = 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/modules/tt_banner/views/img/1b7b3ba5c5da1eaee01923ce4336a941b204a8b9_banner-02.jpg';


    return (
        <>
            <section className='new-product-bg newone-sec d-none d-lg-block'>
                <div className='container gridContainer mt-auto'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div>
                                <img src={imgOne} className='img-fluid newo-img zoom' />
                            </div>
                            <div className='newo-figcap'>
                                <p className='save'>modern looks</p>
                                <h3 className='platinum'>Real Diamond Jewelry</h3>
                                <button type='button' className='goShop-but d-none d-xl-block'>
                                    <span className='but-content'>Shop Now <FontAwesomeIcon icon={faCirclePlay} /></span>
                                </button>
                            </div>
                        </div>


                        <div className='col-12 col-md-6'>
                            <div>
                                <img src={imgTwo} className='img-fluid newo-img zoom' />
                                <div className='newo-figcap'>
                                    <p className='save'>save uo to 30%</p>
                                    <h3 className='platinum'>Platinum Shade Couple Rings</h3>
                                    <button type='button' className='shopNow-but but-contentX d-none d-xl-block'>
                                        <span className='but-content'>Go Shop <FontAwesomeIcon icon={faCirclePlay} /></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewOnces