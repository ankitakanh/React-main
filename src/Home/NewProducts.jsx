import React from 'react'
import './NewProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'

const NewProducts = (props) => {
    const data = props.new
    // const hrImg = '../assets/Images/download.png';
    return (
        <>
            <div className='new-product-bg'>
                <div className='container'>
                    {/* <div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <h3 className='treanding-prods'>TRENDING PRODUCTS</h3>
                            <div>
                                <img src={hrImg}/>
                            </div>
                        </div>
                    </div> */}
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
        </>
    )
}

export default NewProducts