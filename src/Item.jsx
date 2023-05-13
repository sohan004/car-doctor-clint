import React from 'react';
import Swal from 'sweetalert2';

const Item = (props) => {
    const { _id, serviceId, serviceName, serviceEmail, servicePrice, serviceDate, img } = props.i

    const delet = (i) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-beige-tau.vercel.app/bookmark/${i}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const after = props.item.filter(fil => fil._id != i)
                            props.setItem(after)

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='row g-2 mb-5  p-4 shadow rounded-3 d-flex align-items-center'>
            <div className="col-4 col-md-1">
                <div className=''>
                    <button onClick={() => delet(_id)} className='text-white btn-danger d-inline p-2 px-3 btn rounded-circle'>x</button>
                </div>
            </div>
            <div className="col-4 col-md-3">
                <div>
                    <img src={img} alt="" className="img-fluid w-100" />
                </div>
            </div>
            <div className="col-4 col-md-2">
                <div>
                    <h4 className="text-center">{serviceName}</h4>
                </div>
            </div>
            <div className="col-4 col-md-2">
                <div>
                    <h4 className="text-center">${servicePrice}</h4>
                </div>
            </div>
            <div className="col-4 col-md-2">
                <div>
                    <h4 className="text-center">{serviceDate}</h4>
                </div>
            </div>
            <div className="col-4 col-md-2">
                <div>
                    <button className="btn btn-primary">panding</button>
                </div>
            </div>
        </div>
    );
};

export default Item;