import React, { useEffect, useState } from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = ({final_price, final_name}) => {
    const [stripePromise, setStripePromise] = useState(null)
    const [myclientSecret, setMyclientSecret] = useState('')

    useEffect(() => {
        fetch('https://note-node-crud.onrender.com/config').then(async(r) => {
            const {publishableKey} = await r.json()
            setStripePromise(loadStripe(publishableKey))
        })
    }, [])
    const final = final_price
    const price = 2999
    const email = 'homer@odyssey.com'
    const id = '90987-98789'
    const name = final_name
    const finalDuration = 1

   useEffect(() => {
        fetch('https://note-node-crud.onrender.com/pay', {
            method: 'POST',
            body: JSON.stringify({ final, price, email, id, name, finalDuration }),
            headers: {
              "Content-Type": "application/json",
            },
        }).then(async(r) => {
            const {clientSecret } = await r.json()
            setMyclientSecret(clientSecret)
        })
    }, [stripePromise])

  return (
    <div>
        {stripePromise && myclientSecret && <Elements stripe={stripePromise} options={{clientSecret: myclientSecret}}>
            <CheckoutForm />
        </Elements>}
    </div>
  )
}

export default Payment