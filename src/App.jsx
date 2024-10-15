import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import { Toaster } from 'react-hot-toast';

const App = () => {
  const API_URL = "https://fakestoreapi.com/products"
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true)
  async function fetchProductData() {
    try {
      setLoading(true)
      const res = await fetch(API_URL)
      const data = await res.json()
      if (!data) {
        throw new error("fucked up")
      }
      console.log(data)
      setPost(data)
    } catch (error) {
      console.log(error)
      setPost([])
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [])
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage post={post} loading={loading} />} />
          <Route exact path='/cart' element={<CartPage />} />
        </Routes>
      </div>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  )
}

export default App
