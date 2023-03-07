import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function ItemDetails() {
  const params = useParams()

  const [product, setProduct] = useState()


  useEffect( async ()=> {
    const res = await fetch('https://dummyjson.com/products/1')
    const json = await res.json()
    setProduct(json)
  })
  return (
    <>
      <div>
        <p>Hello Wolrd</p>
      </div>
    </>
  )
}

export default ItemDetails