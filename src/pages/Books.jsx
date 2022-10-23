import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books')
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllBooks()
  }, [])

  const handleDelete = async (id) => {
    window.location.reload()
    try {
      await axios.delete('http://localhost:8800/books' + id)

    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div className=' min-h-screen flex flex-col items-center bg-slate-900'>
      <h1 className='m-10 font-poppins font-bold text-5xl text-gray-100'>Book Store</h1>
      {books == '' && <p className='text-gray-400 '> This App allows you to save books information</p>}
      <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 '>
        {books.map((book) => (
          <div className='flex flex-col items-center justify-between' key={book.id}>
            {book.cover && <img className='w-40 shadow-slate-700 shadow-lg' src={book.cover} alt='' />}
            <h2 className='text-gray-100 font-poppins text-xl font-semibold mt-2'>{book.title}</h2>
            <p className='text-gray-500 font-poppins text-sm font-semibold'>{book.description}</p>
            <span className='text-lime-400 font-poppins text-2xl font-semibold'>${book.price} USD</span>
            <button onClick={() => handleDelete(book.id)} className='m-2 text-red-600 font-extrabold text-2xl'>x</button>
            <button className='m-2 text-yellow-400 font-extrabold text-2xl'><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
      <button className='m-5 bg-slate-700 text-white font-semibold px-2 py-1 rounded-md hover:text-gray-700 hover:bg-white'><Link to='/add'>Add new book</Link></button>
    </div>
  )
}

export default Books

