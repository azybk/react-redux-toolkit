import { useEffect, useState } from "react"

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async() => {
            setLoading(true)
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = response.json()
                setProducts(data)

            } catch(error) {
                console.error(error)
            
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    console.log(products)

    return (
        <div>Product List</div>
    )
}

export default ProductList