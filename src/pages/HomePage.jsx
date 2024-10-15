import React from 'react'
import Product from '../components/Product'
import Spinner from '../components/Spinner'



const HomePage = ({post, loading}) => {
  return (
    <div>
      {
         (loading) ? <Spinner />
         : (
                post && post.length > 0
                ? (
                    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] max-w-[1100px] mx-auto py-[3rem]'>
                    {
                      post.map((p) => (
                        <Product key={p.id} post={p} />
                      ))
                    }
                    </div>
                )
                : ("No posts found")
            ) 
      }
    </div>
  )
}

export default HomePage

