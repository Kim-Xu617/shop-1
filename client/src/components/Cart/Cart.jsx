import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useDispatch, useSelector} from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';
import { makeRequest } from "../../makeRequest";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const Cart = () => {

    const products = useSelector(state=>state.cart.products)
    const total = () =>{
        let total = 0;
        products.map(item=>total+=item.price*item.quantity)
        return total.toFixed(2)
    }
    const dispatch = useDispatch()
    const stripePromise = loadStripe('pk_test_51P8mMdF11XhvAKLGcJEi5CvV6IQeVz6TyCVMKAfUJ3P0PyG3dRKzdKaxm6fHv0sODycvU3pPTs1uWMrbB2ncHMWu00Wa5dm0qM');

    const handlePayment = async() =>{
        try {
            const stripe = await stripePromise;

            const res = await makeRequest.post("/orders",{
                products,
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map(item=>(
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL +item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">{item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon 
                    className='delete' 
                    onClick={()=>dispatch(
                        removeItem(item)
                    )}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${total()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span 
            className='reset'
            onClick={()=>dispatch(
                resetCart()
            )}
        >
                Reset Cart
            </span>
    </div>
  )
}

export default Cart