import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react'

function Home() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(async res => await res.json())
      .then(data => setPosts(data.products))
  }, [])


  return (
    <div className='posts'>

      {posts.map((post, i) =>

        <a href={"/products/" + post.id} key={i} className="post">
          <img src={post.images[1]}></img>

          <h2>{post.title}</h2>
          <h3>P {post.price}</h3>
          <span className="discount"> -%{post.discountPercentage} OFF!</span>
          <hr />
          <p>{post.description}</p>
        </a>


      )}
    </div>
  )
}

export default Home
