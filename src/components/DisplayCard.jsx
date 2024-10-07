import React, { useState } from 'react'
import '../App.css';
import { toast } from 'react-toastify';
import contractData from '../contract.json'

function DisplayCard({ item, idx }) {

  return (
    <div key={idx} className="bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 mt-10 h-96">
        {console.log(item)}
      <img
        className="rounded-t-lg object-cover w-full h-56"
        src={item.image}
        alt={item.name}
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{item.name}</h5>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <span className='mt-3'>Apartment ID: <strong className='text-yellow-600'>{item.apartmentId + 1}</strong></span>
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <strong className='text-green-400'>{item.price} TRX </strong> per apartment <br />
        </p>
      </div>
    </div>
  )
}

export default DisplayCard