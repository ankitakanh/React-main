import React from 'react'
import './Bridal.css'
import BridalGirls from '../Bridal/BridalGirls'

const Bridal = () => {
    return (
        <>
            <section className='container'>
                <div className='d-flex justify-content-center align-item-center mt-5'>
                    <div className='brdl-div1 d-none d-xl-block'>
                        <h2 className='bd1-h2'>Groom Elite Collections with Super Saver</h2>
                        <p className='bd1-p'>2020 Unique Designs Available</p>
                    </div>
                    <div className='brdl-div2 d-none d-xl-block'>
                        <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/cms/exe-4.jpg' className='img-fluid bdl-img' />
                    </div>
                </div>
                <div className='d-flex justify-content-center align-item-center'>
                    <div className='brdl-div2 d-none d-xl-block'>
                        <img src='https://prestashop1.templatetrip.com/PRS02/PRS045_groom/PRS12/img/cms/exe-1.jpg' className='img-fulid bdl-img'/>
                    </div>
                    <div className='bdl-longp'>
                        <h2 className='bd2-h2'>Mirror reflection- pearl in a cage of gold Rings</h2>
                        <div>
                            <h4 className='bd2-h4'>Durable shell fabric is made of 100% recycled polyester</h4>
                            <p className='bd2-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <h4 className='bd2-h4'>Durable shell fabric is made of 100% recycled polyester</h4>
                            <p className='bd2-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <h4 className='bd2-h4'>Durable shell fabric is made of 100% recycled polyester</h4>
                            <p className='bd2-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </section>
            <BridalGirls/>
        </>
    )
}

export default Bridal