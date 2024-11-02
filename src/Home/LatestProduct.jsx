import React from 'react'
import './LatestProduct.css'

const LatestProduct = () => {
    return (
        <>
            <div className='lproduct-bg d-none d-lg-block'>
                <div className='container whiteBg my-auto d-flex justify-content-center align-item-center'>
                    <div className='borderSpace'>
                        <h3 className='d-flex justify-content-center align-item-center latest'>Latest Products</h3>
                        <h3 className='d-flex justify-content-center align-item-center checkout'>Check Out The New Jewelry</h3>
                        <div className='d-flex justify-content-center align-item-center'>
                            <button type='button' className='butn'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestProduct