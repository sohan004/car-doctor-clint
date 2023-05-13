import React, { useContext, useState } from 'react'
import './Log.css'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import photo from './assets/images/login/login.svg'
import { AuthContex } from './AuthProvider';
import { useTitle } from './useHook';

const Sign = () => {
    useTitle('SIGN_UP - CAR Doctor')
    const { sign } = useContext(AuthContex)
    const [typ, setTyp] = useState(false)
    const handle = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const pass = e.target.pass.value
        sign(email, pass)
            .then(result => console.log(result.user))
            .catch(error => console.log(error.message))
    }
    return (
        <>
            <div className='container'>
                <div className='mt-5 bg-white p-3 rounded d-flex flex-column flex-md-row gap-4'>
                    <div className='w-100 w-md-50'>
                        <h3 className='text-center'>Please Register First</h3>
                        <form onSubmit={handle} action="">
                            <h5 className="text-secondary">name</h5>
                            <input placeholder='Email' type="text" name="name" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                            <h5 className="text-secondary mt-4">Email</h5>
                            <input placeholder='Email' type="email" name="email" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                            <div className='position-relative'>
                                <h5 className="text-secondary mt-4">Password</h5>
                                <input placeholder='password' type={typ ? 'text' : 'password'} name="pass" className='p-2 w-100 rounded bg-secondary bg-opacity-25 border-0' />
                                <h5 className='ey'>{typ ? <FaEye onClick={() => setTyp(!typ)} /> : <FaEyeSlash onClick={() => setTyp(!typ)} />}</h5>
                            </div>
                            <input type="submit" className='w-100 p-2 mt-4 rounded border-0 bg-danger text-white bg-opacity-75' value="Register" />
                        </form>
                        <p className='text-center my-3'>Already you have account please <Link to="/log">Sign in</Link></p>
                    </div>
                    <div className='w-100 w-md-50'>
                        <img src={photo} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sign;