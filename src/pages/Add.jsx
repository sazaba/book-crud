import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Add() {
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
    price: null
  });
  const navigate = useNavigate()


  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleClick = async e => {
    e.preventDefault()
    navigate('/')
    try {
      await axios.post('http://localhost:8800/books', book)
    } catch (err) {
      console.log(err)
    }

  }
  console.log(book)
  return (
    <div className='flex flex-col items-center bg-teal-500 min-h-screen text-center lg:justify-start sm:justify-around'>
      <h1 className='m-10 font-poppins font-bold text-5xl text-gray-800'><Link to='/'>Add New Book</Link></h1>
      <div className='flex flex-col  lg:w-5/12  sm:w-11/12 space-y-1 m-5 '>
        <input className='p-2 outline-none border-solid border-gray-100 border-2 rounded-md' type='text' placeholder='title' onChange={handleChange} name='title' />
        <input className='p-2 outline-none border-solid border-gray-100 border-2 rounded-md' type='text' placeholder='description' onChange={handleChange} name='description' />
        <input className='p-2 outline-none border-solid border-gray-100 border-2 rounded-md' type='text' placeholder='image url' onChange={handleChange} name='cover' />
        <input className='p-2 outline-none border-solid border-gray-100 border-2 rounded-md' type='number' placeholder='price' onChange={handleChange} name='price' />
      </div>

      <div className='flex lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col flex-col'>
        <button className='m-5 bg-slate-700 text-white font-semibold px-2 py-1 rounded-md hover:text-gray-700 hover:bg-white' ><Link to='/'>Go to Book Store</Link></button>
        <button className='m-5 bg-slate-700 text-white font-semibold px-2 py-1 rounded-md hover:text-gray-700 hover:bg-white' onClick={handleClick}>Add New Book</button>
      </div>

    </div>
  )
}

export default Add

