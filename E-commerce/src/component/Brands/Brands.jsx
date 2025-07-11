import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Brands.module.css';
import LoadingScreen from '../Loader/Loader'; // Assume you have a loading component

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    getBrands();
  }, []);

  async function getBrands() {
    try {
      setLoading(true);
      const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
      setBrands(data.data);
      
      const uniqueCategories = [...new Set(data.data.map(brand => brand.category || 'Uncategorized'))];
      setCategories(['All', ...uniqueCategories]);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching brands:', error);
      setError('Failed to load brands. Please try again later.');
      setLoading(false);
    }
  }

  const filteredBrands = brands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || brand.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (loading) return <LoadingScreen />;
  
  if (error) return (
    <div className="container py-5">
      <div className="alert alert-danger" role="alert">
        {error}
        <button 
          className="btn btn-outline-danger ms-3"
          onClick={getBrands}
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className="brands-page">
      <div className="brands-header">
        <div className="container">
          <div className="row align-items-center py-4">
            <div className="col-lg-6">
              <h2 className="brands-title">Shop By Brand</h2>
              <p className="brands-subtitle">Discover products from your favorite brands</p>
            </div>
            <div className="col-lg-6">
              <div className="search-bar">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search brands..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <i className="fas fa-search search-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        {/* Category filters */}
        <div className="category-filters mb-4">
          <div className="d-flex flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {filteredBrands.length > 0 ? (
          <div className="row g-4">
            {filteredBrands.map((brand) => (
              <div className="col-md-3 col-sm-6" key={brand._id}>
                <Link to={`/brand/${brand._id}`} className="brand-card">
                  <div className="card h-100 brand-card-inner">
                    <div className="brand-image-container">
                      <img
                        src={brand.image}
                        className="card-img-top brand-image"
                        alt={brand.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://placehold.co/400x400?text=Brand+Image';
                        }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title brand-name">{brand.name}</h5>
                      <p className="brand-products-count">
                        {brand.productsCount || Math.floor(Math.random() * 100)} Products
                      </p>
                    </div>
                    <div className="hover-overlay">
                      <div className="hover-content">
                        <span className="view-products-btn">View Products</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="text-center py-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h4>No brands found</h4>
              <p>Try adjusting your search or filter criteria</p>
              {searchTerm && (
                <button 
                  className="btn btn-outline-primary mt-3"
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}