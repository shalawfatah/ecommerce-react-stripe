import React from 'react'
import BuyBtn from '../general/BuyBtn'

const SingleProduct = ({item}) => {
  return (
    <div style={{backgroundImage: `url(${item.pictures})`, backgroundSize:'cover', backgroundPosition:'center'}} className=' rounded-md shadow-md shadow-gray-700 bg-gray-100 w-96 h-64 flex items-end'>
        <div className='p-2 bg-black bg-opacity-30 text-white w-full m-2 rounded-md'>
            <h1 className='font-bold text-lg'>{item.name}</h1>
           <p>Price: ${item.price}</p>
           <BuyBtn />
        </div>
    </div>
  )
}

export default SingleProduct