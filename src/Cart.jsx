import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from './AuthProvider';
import Item from './Item';
import { useTitle } from './useHook';

const Cart = () => {
    useTitle('BOOKMARK - SERVICE')
    const { user, load, out } = useContext(AuthContex)
    const userEmail = user?.email
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(`https://car-doctor-server-beige-tau.vercel.app/bookmark?email=${userEmail ? userEmail : '...'}`, {
            method: 'get',
            headers: {
                authorization: localStorage.getItem('user-token')
            }
        })
            .then(res => res.json()).then(data => {
                if (data?.error) {
                    out()
                }
                else {
                    setItem(data)
                }
            })
    }, [user])
    console.log(item)
    return (
        <div className='container'>
            {item.map(i => <Item key={i._id} i={i} item={item} setItem={setItem}></Item>)}
        </div>
    );
};

export default Cart;