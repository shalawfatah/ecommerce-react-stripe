import React, { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const [isProcessing, setIsProcessing] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
       e.preventDefault()
       if(!stripe || !elements) {
        return;
       } 
       setIsProcessing(true)
       const {error} = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: `https://ecommerce-react-stripe.netlify.app`
        }
       })
       if(error) {
        setMessage(error.message)
       }
       setIsProcessing(false)
    }

  return (
    <div>
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={isProcessing} id="submit">
                <span id="button-text">
                    {isProcessing ? "Processing..." : "Pay now"}
                </span>
            </button>
        </form>
    </div>
  )
}

export default CheckoutForm