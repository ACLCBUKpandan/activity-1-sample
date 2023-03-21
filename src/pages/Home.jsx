import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Home() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(async res => await res.json())
      .then(data => setPosts(data.products))
  }, [])


  return (
    <div className='posts'>

      {posts.map((post, id) =>
        <ProductCard post={post}></ProductCard>
      )}
    </div>
  )
}

export default Home
