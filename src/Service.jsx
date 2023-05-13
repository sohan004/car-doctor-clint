import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id, img, price, title } = props.data
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className="card h-100 p-4 border-0 shadow rounded rounded-4" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <div className='d-flex justify-content-between mt-4 '>
                        <h5 className="card-text text-danger">Price: {price}</h5>
                        <Link to={`/service/${_id}`}><FaArrowRight className='fs-1 text-white bg-danger rounded-circle p-2' type='button'></FaArrowRight></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;