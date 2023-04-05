import React from 'react'

const BuyBtn = ({handleClick}) => {
  return (
    <div onClick={handleClick} className="cursor-pointer hover:bg-black font-bold bg-gray-700 duration-400 px-4 py-1 rounded text-white">
        <p>Buy</p>
    </div>
  )
}

export default BuyBtn