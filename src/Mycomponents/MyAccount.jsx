import React from 'react'
import './MyAccount.css'
import { Link } from 'react-router-dom'

const MyAccount = () => {


    return (

        <>
            <section className='new-product-bg'>
                <div className='ma-bg-img d-flex justify-content-center alighn-item-center py-5'>
                    <Link className='btn text-light fw-bold fs-5 py-5' to='/'>Home</Link>
                </div>
                <div>
                    <div className='container'>
                        <h2 className='login-ac'>Log In To Your Account</h2>
                        <div className='white-div'>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label philosopherX">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text lowercase">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label philosopherX">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className='d-flex justify-content-center align-item-center pt-5'>
                                    <div className='text-center'>


                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Forget Password?
                                        </button>

                                        {/* <!-- Modal --> */}
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Enter alternate Email Addresss</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <label for="exampleInputEmail1" class="form-label philosopherX fw-bold">Email address</label>
                                                        <input type="email" class="form-control lowercase" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='@gmail.com' />
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Cancle</button>
                                                        <button type="submit" class="btn btn-warning">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label lowercase" for="exampleCheck1">Rember..</label>
                                        </div> */}
                                        <div className='pt-3'>
                                            <button type="submit" class="btn btn-warning philosopherX">Log In</button>
                                        </div>
                                    </div>
                                </div>
                                <hr className='text-secondary mt-5' />
                                <p className='text-center py-3'><a href='#' className='text-dark fw-bold'>No account? &nbsp; Create one here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default MyAccount