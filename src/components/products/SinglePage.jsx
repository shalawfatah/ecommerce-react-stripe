import React from 'react'
import BuyBtn from '../general/BuyBtn'
import { useRouter } from 'next/router'

const SinglePage = ({item}) => {

  const router = useRouter();

  return (
    <div className='w-screen min-h-screen flex items-end' style={{backgroundImage: `url(${item.pictures})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className='p-2 bg-black bg-opacity-60 text-white w-full m-2 rounded'>
            <h1 className='text-2xl font-bold'>Product Name: {item.name}</h1>
            <p>Product Price: ${item.price}</p>
            <p className='my-2'>Description: {item.description}</p>
            <BuyBtn handleClick={() => router.push({
                                          pathname: '../../checkout',
                                          query: { price: item.price, name: item.name }
                                        })} />
        </div>
    </div>
  )
}

export default SinglePage