import React from 'react'
import './Home.css'
import { Link} from 'react-router-dom'
// import NewProducts from '../Home/NewProducts'
// import BestSellers from '../Home/BestSellers.jsx'
// import Featured from '../Home/Featured.jsx'
import LatestProduct from '../Home/LatestProduct.jsx'
import Testimonial from '../Home/Testimonial.jsx'
import NewOnces from '../Home/NewOnces.jsx'
import LatestNews from '../Home/LatestNews.jsx'

const Home = () => {

    const ary = [
        {
          img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/976-home_default/hummingbird-notebook.jpg',
          title: 'neque porro quisquamest',
          price: '$11.35',
          span: '-12%',
          del: '$12.90'
        },
    
        {
          img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/970-home_default/mountain-fox-notebook.jpg',
          title: 'tempora incidunt utlabore',
          price: '$7.47',
          span: '-17%',
          del: '$9.00'
        },
    
        {
          img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/945-home_default/hummingbird-vector-graphics.jpg',
          title: 'quis autem veleuminium',
          price: '$9.00'
        },
    
        {
          img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/942-home_default/mountain-fox-vector-graphics.jpg',
          title: 'magni dolores esoquies',
          price: '$35.00'
        },
    
        {
          img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/972-home_default/brown-bear-notebook.jpg',
          title: 'aliquam quaerat voluptem',
          price: '$7.65',
          span: '-15%',
          del: '$9.00'
        },
    
        {
          img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/948-home_default/pack-mug-framed-poster.jpg',
          title: 'quaerat outt voluptatem',
          price: '$18.90'
        },
    
        {
          img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/944-home_default/brown-bear-vector-graphics.jpg',
          title: 'similique suntin culpaqui',
          price: '$12.35',
          span: '-3%',
          del: '$12.90'
        },
    
        {
          img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/940-home_default/hummingbird-cushion.jpg',
          title: 'aspetur autodit autfugit',
          price: '$12.90'
        },
      ];
    
    return (
        <>
            <div className='d-flex justify-content-center align-item-center new-product-bg'>
                <div className='col-11'>
                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active bg-2">
                                <div className='container d-flex justify-content-evenly align-item-flex-end'>
                                    <menu className='yello-bg container'>
                                        <li className='d-ring'>Diamond Ring</li>
                                        <li className='cbs d-none d-lg-block'>CATALOGUE,BRIDEL STUDIO</li>
                                        <li className='get-off d-none d-xl-block'>Get up to 25% OFFon Shop, neckless!</li>
                                        <li className='but-getOff d-flex justify-content-center align-item-flex-center '><button type='button' className='home-but d-none d-xl-block'>Shop Now</button></li>
                                    </menu>
                                </div>
                            </div>
                            <div class="carousel-item bg-1">
                                <div className='container d-flex justify-content-evenly align-item-flex-end'>
                                    <menu className='yello-bg container'>
                                        <li className='d-ring'>Diamond Ring</li>
                                        <li className='cbs'>CATALOGUE,BRIDEL STUDIO</li>
                                        <li className='get-off'>Get up to 25% OFFon Shop, neckless!</li>
                                        <li className='but-getOff d-flex justify-content-center align-item-flex-center'><button type='button' className='home-but'>Shop Now</button></li>
                                    </menu>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon nxt-prev-but" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon nxt-prev-but" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <NewOnces />
            <LatestProduct />
            

            <div className='new-product-bg padiingB'>
                <div className='container'>
                    <div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <h3 className='treanding-prods text-center'>Explore Your Beauty</h3>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ontario_Northland_Wayfinder.svg/354px-Ontario_Northland_Wayfinder.svg.png' width={90} height={20} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonial/>
            <LatestNews/>

            <div className='new-product-bg padiingB'>
                <div className='container'>
                    <div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <h3 className='treanding-prods text-center'>TRENDING PRODUCTS</h3>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ontario_Northland_Wayfinder.svg/354px-Ontario_Northland_Wayfinder.svg.png' width={90} height={20} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='new-product-bg'>
                <ul className='d-flex justify-content-center align-items-center flex-wrap'>
                    <li className='ms-lg-0 me-lg-4'>
                        <Link to='/' className='butnHome'>NewProducts</Link>
                    </li>
                    <li className='mx-lg-4'>
                        <Link to='../BestSellers' className='butnHome'>BestSellers</Link>
                    </li>
                    <li className='mx-lg-4'>
                        <Link to='../Featured' className='butnHome'>Featured</Link>
                    </li>
                </ul>
            </div>

            

            {/* <Routes>
                <Route path='/' element={<NewProducts new={ary} />} />
                <Route path='/BestSellers' element={<BestSellers best={ars} />} />
                <Route path='/Featured' element={<Featured feach={ayy} />} />
            </Routes> */}

            
        </>
    )
}

export default Home;