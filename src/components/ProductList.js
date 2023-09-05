import '../App.css';

function ProductList({ product, addToCart}){
    return(
      <div className='flex'>
          {
            product.map((productItem, productIndex) => {
               return (
                       <div style={{width: '50%' }}>
                          <div className='product-item'>

                            <img className='Items' src={productItem.url}/>
                            <p>{productItem.name} | {productItem.Category}</p>
                            <p>{productItem.Seller}</p>
                            <p> Rs. {productItem.Price} /-</p>
                            <button onClick={() => addToCart(productItem)} className='btn'>Add To Cart</button>
                          </div>
                        </div>
                     ) 
             })

         }
     </div>
    )
}
export default ProductList;