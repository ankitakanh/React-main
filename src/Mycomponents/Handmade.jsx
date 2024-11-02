import React from 'react'
// import { Link } from 'react-router-dom'
import './Handmade.css'
import CrystalNew from '../Handmade/CrystalNew';

const Handmade = (props) => {
    const DataTab = props.new;
    return (
        <>
            {/* <Link className='btn btn-warning rounded-circle position-fixed bottom-0' to='/'>Home</Link> */}
            <CrystalNew/>
            <div className='container'>

                <div className='pb-5'>
                    <div className='d-flex justify-content-center align-items-center text-center'>
                        <h3 className='treanding-prods text-dark top-cats'>TOP OF CATEGORIES</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mb-5'>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ontario_Northland_Wayfinder.svg/354px-Ontario_Northland_Wayfinder.svg.png' width={90} height={20} />
                        </div>
                    </div>
                </div>

                <div className='container mb-5 pb-5'>
                    <div className='row'>
                        {
                            DataTab.map((e) => {
                                return (
                                    <div className='col-lg-4 text-center mt-3 mt-lg-0 mt-md-0 p-3'>
                                        <div className='shadow p-5'>
                                            <img className='img-fluid hm-img' src={e.img} />
                                            <h3 className='mt-5 hm-title'>{e.title}</h3>
                                            <div className='div-hr my-4'></div>
                                            <p className='hm-para'>{e.para}</p>
                                            <h5 className='hm-itm'>{e.items}</h5>
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

export default Handmade;