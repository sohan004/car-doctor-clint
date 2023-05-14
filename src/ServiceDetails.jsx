import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from './AuthProvider';
import { useTitle } from './useHook';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
    const { _id, img, price, title } = useLoaderData()
    const { user } = useContext(AuthContex)
    useTitle(`SERVICE - ${title}`)
    const [loader, setLoader] = useState(true)

    const handle = e => {
        e.preventDefault()
        setLoader(false)
        const serviceName = e.target.name.value
        const servicePrice = e.target.price.value
        const serviceDate = e.target.date.value
        const serviceEmail = e.target.email.value
        const serviceId = _id
        const info = { serviceId, serviceName, serviceEmail, servicePrice, serviceDate, img }
        fetch('https://car-doctor-server-beige-tau.vercel.app/bookmark', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json()).then(data => {
                if (data.insertedId) {
                    setLoader(true)
                    Swal.fire(
                        'service add succesfully',
                        'You clicked the button!',
                        'success'
                    )
                }
            })

    }
    return (
        loader ? <div className='container'>
            <form onSubmit={handle} action="">
                <div className="row g-3">
                    <div className="col-6">
                        <div>
                            <p >service name</p>
                            <input disabled defaultValue={title} type="text" name="name" className='w-100 p-2 rounded' />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <p>Date</p>
                            <input type="date" name="date" className='w-100 p-2 rounded' />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <p>service price</p>
                            <input disabled defaultValue={price} type="text" name="price" className='w-100 p-2 rounded' />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <p>email</p>
                            <input defaultValue={user?.email} type="email" name="email" className='w-100 p-2 rounded' />
                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            <input type="submit" value="submit" className='btn btn-primary w-100' />
                        </div>
                    </div>
                </div>
            </form>
        </div> : <div className="d-flex justify-content-center">
            <div className="spinner-border mt-5 " role="status">
                <span className="visually-hidden ">Loading...</span>
            </div>
        </div>
    );
};

export default ServiceDetails;