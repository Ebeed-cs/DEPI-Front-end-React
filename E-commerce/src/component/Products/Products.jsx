import axios from "axios"
import { useState, useEffect, useContext } from "react"
import Loader from "../Loader/Loader"
import { Link } from "react-router-dom"
import { cartContext } from "../../context/cartContext"
import toast from "react-hot-toast"
import CategorySlider from "../CategorySlider/CategorySlider"

export default function Products() {
  const [isLoading, setLoading] = useState(true)
  const [product, setProduct] = useState([])

  let {addProductToCart} = useContext(cartContext);
  
  async function addProductItem(id){
    let response = await addProductToCart(id)
    console.log('response',response);
    if(response.data.status=='success'){
      toast.success(response.data.message)   
    }
    else{
      toast.error(response.data.message)
    }   
  }

  function getProducts(){
    axios.get('https://ecommerce.routemisr.com/api/v1/products')
    .then( ({data})=>{
      console.log(data.data)
      setLoading(false);
      setProduct(data.data)
    })
    .catch( ()=>{
      setLoading(false) 
    })
  }

  useEffect( ()=>{
    getProducts();
  }, [])

  return (
    <div className="products-container py-5">
      {/* Hero Section */}
      <div className="hero-section mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold text-primary mb-3">Discover Amazing Products</h1>
              <p className="lead text-muted mb-4">Explore our collection of high-quality products at affordable prices.</p>
              <div className="d-flex gap-3">
                <a href="#featured-products" className="btn btn-primary">Shop Now</a>
                <a href="#categories" className="btn btn-outline-secondary">Browse Categories</a>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="hero-image-container text-center">
                <img src="https://via.placeholder.com/600x400" alt="Shop with us" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Slider with improved styling */}
      <div id="categories" className="category-section mb-5">
        <div className="container">
          <div className="section-header d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title fw-bold">Categories</h2>
            <Link to="/categories" className="view-all-link text-decoration-none">View All <i className="fas fa-arrow-right ms-2"></i></Link>
          </div>
          <CategorySlider />
        </div>
      </div>

      {/* Products Section */}
      <div id="featured-products" className="products-section">
        <div className="container">
          <div className="section-header d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title fw-bold">All Products</h2>
            <div className="filter-sort d-flex align-items-center gap-3">
              <div className="dropdown">
                <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-sort me-2"></i> Sort By
                </button>
                <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                  <li><a className="dropdown-item" href="#">Price: Low to High</a></li>
                  <li><a className="dropdown-item" href="#">Price: High to Low</a></li>
                  <li><a className="dropdown-item" href="#">Most Popular</a></li>
                  <li><a className="dropdown-item" href="#">Highest Rated</a></li>
                </ul>
              </div>
              <div className="view-options d-flex">
                <button className="btn btn-sm btn-outline-secondary me-1 active">
                  <i className="fas fa-th"></i>
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>

          {!isLoading ? (
            <div className="row g-4">
              {product.map((productInfo) => (
                <div key={productInfo.id} className="col-6 col-md-4 col-lg-3">
                  <div className="product-card h-100 rounded shadow-sm hover-effect">
                    <div className="product-badge">
                      {productInfo.ratingsAverage >= 4.5 && <span className="badge bg-success">Top Rated</span>}
                      {productInfo.priceAfterDiscount && <span className="badge bg-danger">Sale</span>}
                    </div>
                    <div className="product-img-container">
                      <Link to={`/productDetails/${productInfo.id}`}>
                        <img src={productInfo.imageCover} className="card-img-top product-img" alt={productInfo.title} />
                      </Link>
                      <div className="product-actions">
                        <button className="action-btn wishlist-btn" title="Add to Wishlist">
                          <i className="far fa-heart"></i>
                        </button>
                        <button className="action-btn compare-btn" title="Compare">
                          <i className="fas fa-exchange-alt"></i>
                        </button>
                        <button className="action-btn quickview-btn" title="Quick View">
                          <i className="far fa-eye"></i>
                        </button>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <Link to={`/productDetails/${productInfo.id}`} className="text-decoration-none">
                        <span className="product-category text-info small mb-2 d-block">{productInfo.category.name}</span>
                        <h3 className="product-title h6 mb-1 text-dark">{productInfo.title.split(' ').slice(0, 3).join(' ')}</h3>
                        <div className="product-rating my-2">
                          <span className="stars">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className={`fas fa-star ${i < Math.floor(productInfo.ratingsAverage || 0) ? 'text-warning' : 'text-muted'}`}></i>
                            ))}
                          </span>
                          <span className="rating-count ms-2 text-muted small">({productInfo.ratingsQuantity})</span>
                        </div>
                        <div className="product-price-container d-flex align-items-center mb-3">
                          <span className="product-price fw-bold me-2">{productInfo.price} EGP</span>
                          {productInfo.priceAfterDiscount && (
                            <span className="product-price-old text-decoration-line-through text-muted small">{Math.round(productInfo.price * 1.2)} EGP</span>
                          )}
                        </div>
                      </Link>
                      <button 
                        onClick={() => addProductItem(productInfo.id)} 
                        className="btn btn-primary mt-auto w-100 add-to-cart-btn"
                      >
                        <i className="fas fa-shopping-cart me-2"></i>Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="loader-container py-5">
              <Loader />
            </div>
          )}

          {!isLoading && product.length > 0 && (
            <div className="pagination-container d-flex justify-content-center mt-5">
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}