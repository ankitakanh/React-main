import React from 'react'
import Home from './Mycomponents/Home'
import Handmade from './Mycomponents/Handmade'
import Bridal from './Mycomponents/Bridal'
import MyAccount from './Mycomponents/MyAccount'
import More from './Mycomponents/More'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faYoutube, faPinterestP, faVimeoV, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faCartShopping, faLocationDot, faPhone, faEnvelope, faWifi } from '@fortawesome/free-solid-svg-icons'
import { faUser, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import NewProducts from './Home/NewProducts.jsx'
import BestSellers from './Home/BestSellers.jsx'
import Featured from './Home/Featured.jsx'


const App = () => {

  const arr = [
    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/modules/ttcategoryslider/views/img/6-ttcategoryslider.jpg',
      title: 'MiniDisc',
      para: 'T-shirts, sweaters, hoodies and womens...',
      items: '8 items'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/modules/ttcategoryslider/views/img/3-ttcategoryslider.jpg',
      title: 'HandMade',
      para: 'Items and accessories for yourdesk, kitchen or...',
      items: '2 items'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/modules/ttcategoryslider/views/img/5-ttcategoryslider.jpg',
      title: 'Douches',
      para: 'Discover our favorites discoveries....',
      items: '8 items'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/979-large_default/customizable-mug.jpg',
      title: 'Repudiandae',
      para: 'Discover our fashionable discoveries....',
      items: '8 items'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/998-large_default/customizable-mug.jpg',
      title: 'Douches',
      para: 'Discover our fashionable discoveries....',
      items: '8 items'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/1001-medium_default/customizable-mug.jpg',
      title: 'Sint',
      para: 'Discover our fashionable discoveries....',
      items: '8 items'
    },
  ];


  const many = [
    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/888-home_default/today-is-a-good-day-framed-poster.jpg',
      title: 'neque porro quisquamest',
      price: '$11.35',
      span: '-12%',
      del: '$12.90'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/884-home_default/the-best-is-yet-to-come-framed-poster.jpg',
      title: 'tempora incidunt utlabore',
      price: '$7.47',
      span: '-17%',
      del: '$9.00'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/980-home_default/customizable-mug.jpg',
      title: 'quis autem veleuminium',
      price: '$9.00'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/942-home_default/mountain-fox-vector-graphics.jpg',
      title: 'magni dolores esoquies',
      price: '$35.00'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/914-home_default/mug-today-is-a-good-day.jpg',
      title: 'aliquam quaerat voluptem',
      price: '$7.65',
      span: '-15%',
      del: '$9.00'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/978-home_default/customizable-mug.jpg',
      title: 'quaerat outt voluptatem',
      price: '$18.90'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/942-home_default/mountain-fox-vector-graphics.jpg',
      title: 'similique suntin culpaqui',
      price: '$12.35',
      span: '-3%',
      del: '$12.90'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/886-home_default/the-adventure-begins-framed-poster.jpg',
      title: 'aspetur autodit autfugit',
      price: '$12.90'
    },
  ];

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

  const ars = [
    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/976-home_default/hummingbird-notebook.jpg',
      title: 'voluptas nulla pariatur',
      price: '$18.90'
    },
    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/944-home_default/brown-bear-vector-graphics.jpg',
      title: 'Perspiciatis Unde Omnis',
      price: '$19.12',
      span: '-20%',
      del: '$23.90'
    },
    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/976-home_default/hummingbird-notebook.jpg',
      title: 'voluptas nulla pariatur',
      price: '$18.90'
    },
    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/944-home_default/brown-bear-vector-graphics.jpg',
      title: 'Voluptas Nulla Pariatur',
      price: '$28.72',
      span: '-20%',
      del: '$35.90'
    }

  ];

  const ayy = [
    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/888-home_default/today-is-a-good-day-framed-poster.jpg',
      title: 'neque porro quisquamest',
      price: '$11.35',
      span: '-12%',
      del: '$12.90'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/884-home_default/the-best-is-yet-to-come-framed-poster.jpg',
      title: 'tempora incidunt utlabore',
      price: '$7.47',
      span: '-17%',
      del: '$9.00'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/980-home_default/customizable-mug.jpg',
      title: 'quis autem veleuminium',
      price: '$9.00'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/942-home_default/mountain-fox-vector-graphics.jpg',
      title: 'magni dolores esoquies',
      price: '$35.00'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/914-home_default/mug-today-is-a-good-day.jpg',
      title: 'aliquam quaerat voluptem',
      price: '$7.65',
      span: '-15%',
      del: '$9.00'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/978-home_default/customizable-mug.jpg',
      title: 'quaerat outt voluptatem',
      price: '$18.90'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/942-home_default/mountain-fox-vector-graphics.jpg',
      title: 'similique suntin culpaqui',
      price: '$12.35',
      span: '-3%',
      del: '$12.90'
    },

    {
      img: 'https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/886-home_default/the-adventure-begins-framed-poster.jpg',
      title: 'aspetur autodit autfugit',
      price: '$12.90'
    },
  ];


  return (
    <>

      <nav class="navbar navbar-expand-lg bg-body-tertiary p-4 justify-content-between navFixed shadow">
        <div class="container-fluid">
          <div className='col-lg-4'>
            <img className='navbar-brand img-fluid' src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/demo-logo-1578376844.jpg' />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav py-4 px-lg-1 px-xl-4 justify-content-evenly col-lg-6">
              <li class="nav-item mt-3 mt-lg-0 px-lg-2 px-xl-4">
                <Link className='text-decoration-none text-dark fw-bold fs-5 nav-font' to="/">Home</Link>
              </li>
              <li class="nav-item mt-3 mt-lg-0 px-lg-2 px-xl-4">
                <Link className='text-decoration-none text-dark fw-bold fs-5 nav-font' to="/Handmade">Handmade</Link>
              </li>
              <li class="nav-item mt-3 mt-lg-0 px-lg-2 px-xl-4">
                <Link className='text-decoration-none text-dark fw-bold fs-5 nav-font' to="/Bridal">Bridal</Link>
              </li>
              <li class="nav-item mt-3 mt-lg-0 px-lg-2 px-xl-4">
                <Link className='text-decoration-none text-dark fw-bold fs-5 nav-font' to="/MyAccount">MyAccount</Link>
              </li>
              <li class="nav-item mt-3 mt-lg-0 px-lg-2 px-xl-4">
                <Link className='text-decoration-none text-dark fw-bold fs-5 nav-font' to="/More">More</Link>
              </li>
            </ul>
            <div className='col-lg-2 ms-auto'>
              <ul class="navbar-nav p-4 justify-content-evenly">
                <li class="nav-item mt-3 mt-lg-0 flip-vertical-right pe-3">
                  <a href='#' className='navIcons'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                </li>
                <li class="nav-item mt-3 mt-lg-0 flip-vertical-right pe-3">
                  <a href='#' className='navIcons'><FontAwesomeIcon icon={faUser} /></a>
                </li>
                <li class="nav-item mt-3 mt-lg-0 flip-vertical-right">
                  <a href='#' className='navIcons'><FontAwesomeIcon icon={faCartShopping} /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Handmade" element={<Handmade new={arr} />} />
        <Route path="/Bridal" element={<Bridal />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/More" element={<More more={many} />} />
      </Routes>



      <Routes>
        <Route path='/' element={<NewProducts new={ary} />} />
        <Route path='/BestSellers' element={<BestSellers best={ars} />} />
        <Route path='/Featured' element={<Featured feach={ayy} />} />
      </Routes>


      <section>
        <section className='bg-dark'>
          <div className='container py-5'>
            <div className='row py-5'>

              <div className='col-12 col-md-6 col-lg-3 pt-4'>
                <h5 className='text-light py-4 footer-h'>STORE INFORMATION</h5>
                <menu>
                  <li className='grey-li'><a href='#' className='grey-li'><FontAwesomeIcon icon={faLocationDot} /></a>&nbsp;&nbsp;&nbsp;Demo Store <br /> United States</li>
                  <li className='grey-li'><a href='#' className='grey-li'><FontAwesomeIcon icon={faPhone} /></a>&nbsp;&nbsp;&nbsp;0123456789</li>
                  <li className='grey-li'><a href='#' className='grey-li'><FontAwesomeIcon icon={faShareFromSquare} /></a>&nbsp;&nbsp;&nbsp;054-564-5452</li>
                  <li className='grey-li'><a href='#' className='grey-li'><FontAwesomeIcon icon={faEnvelope} /></a>&nbsp;&nbsp;&nbsp;demo@gmail.com</li>
                </menu>
              </div>

              <div className='col-12 col-md-6 col-lg-3 pt-4'>
                <h5 className='text-light py-4 footer-h'>PRODUCTS</h5>
                <menu className=''>
                  <li className='grey-li slide-right'>Delivery</li>
                  <li className='grey-li slide-right'>Prices Drop</li>
                  <li className='grey-li slide-right'>Contact Us</li>
                  <li className='grey-li slide-right'>Sitemap</li>
                  <li className='grey-li slide-right'>My Account</li>
                </menu>
              </div>

              <div className='col-12 col-md-6 col-lg-3 pt-4'>
                <h5 className='text-light py-4 footer-h'>YOUR ACCOUNT</h5>
                <menu>
                  <li className='grey-li slide-right'>Personal Info</li>
                  <li className='grey-li slide-right'>Orders</li>
                  <li className='grey-li slide-right'>Credit Slip</li>
                  <li className='grey-li slide-right'>Addresses</li>
                  <li className='grey-li slide-right'>My Wishlists</li>
                </menu>
              </div>

              <div className='col-12 col-md-6 col-lg-3 pt-4'>
                <h5 className='text-light py-4 footer-h'><FontAwesomeIcon icon={faEnvelope} className='fs-4' /> &nbsp;&nbsp;NEWSLETTER</h5>
                <p className='grey-li'>Claritas processus dynamicus sequitu ynamicus Claritas ynamicus Claritas processus dynamicus</p>
                <div class="input-group mb-3">
                  <input type="email" class="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
                </div>
              </div>
            </div>
            <hr className='text-secondary' />
            <div className='d-flex justify-content-between align-item-center flex-wrap'>
              <div><p className='grey-li'>Copyright ©2024 All rights reserved | This template is made with &hearts; by Ankita</p></div>
              <div>
                <menu className='d-flex justify-content-evenly align-item-center'>
                  <li className='px-1 px-lg-3'><a href='#' className='grey-li facebook'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                  <li className='px-1 px-lg-3'><a href='#' className='grey-li twitter'><FontAwesomeIcon icon={faXTwitter} /></a></li>
                  <li className='px-1 px-lg-3'><a href='#' className='grey-li wifi'><FontAwesomeIcon icon={faWifi} /></a></li>
                  <li className='px-1 px-lg-3'><a href='#' className='grey-li utube'><FontAwesomeIcon icon={faYoutube} /></a></li>
                  <li className='px-1 px-lg-3'><a href='#' className='grey-li vimeo'><FontAwesomeIcon icon={faVimeoV} /></a></li>
                  <li className='px-1 px-lg-3'><a href='#' className='grey-li insta'><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li className='px-1 px-lg-3'><a href='#' className='grey-li pint'><FontAwesomeIcon icon={faPinterestP} /></a></li>
                </menu>
              </div>
            </div>
          </div>
        </section>
      </section>

    </>
  )
}

export default App