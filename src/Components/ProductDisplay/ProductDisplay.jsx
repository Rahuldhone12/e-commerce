import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  
  return (
    <div className='productDisplay'>
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
          </div>
        </div>    
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>{122}</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              Rs {product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              Rs {product.new_price}
            </div>
          </div>
          <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa ipsa iusto repudiandae at beatae officiis consequuntur ea, laborum, sequi maxime ad corrupti quis corporis.
          </div>
          <div className="productdisplay-right-size">
            <h1>select size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
          <p className='productdisplay-right-category'> <span>Category : </span>women, T-shirt, crop Top </p>
          <p className='productdisplay-right-category'> <span>Tags : </span>Modern, latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay