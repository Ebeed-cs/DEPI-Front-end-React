import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { userContext } from '../../context/userContext';
import { useContext } from 'react';
import './Login.module.css'; 

export default function Login() {
  let { setLogin } = useContext(userContext);
  let navigate = useNavigate();

  async function handleLogin(formsData) {
    try {
      const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', formsData);
      
      if (response.data.message === 'success') {
        localStorage.setItem('userToken', response.data.token);
        setLogin(response.data.token);
        navigate('/'); // Programmatic routing
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  // Validation
  let validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Enter valid email'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^[A-Z][a-z0-9]{6,8}$/, 'Password must start with uppercase letter and be 7-9 characters')
  });

  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: handleLogin
  });

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card login-card">
              <div className="card-body p-4 p-md-5">
                {/* Logo/Brand Section */}
                <div className="text-center mb-4">
                  <div className="brand-logo mb-3">
                    <i className="fas fa-shopping-bag"></i>
                  </div>
                  <h1 className="login-title">Welcome Back</h1>
                  <p className="text-muted">Sign in to your account to continue</p>
                </div>
                
                {/* Login Form */}
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group mb-4">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-envelope text-primary"></i>
                      </span>
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="email"
                        className={`form-control form-control-lg ${
                          formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                        }`}
                        name="email"
                        value={formik.values.email}
                        id="email"
                        placeholder="name@example.com"
                      />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <div className="invalid-feedback d-block">{formik.errors.email}</div>
                    )}
                  </div>

                  <div className="form-group mb-4">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="password" className="form-label">Password</label>
                      <Link to="/forgot-password" className="text-decoration-none small">Forgot password?</Link>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-lock text-primary"></i>
                      </span>
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        className={`form-control form-control-lg ${
                          formik.touched.password && formik.errors.password ? 'is-invalid' : ''
                        }`}
                        name="password"
                        value={formik.values.password}
                        id="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <div className="invalid-feedback d-block">{formik.errors.password}</div>
                    )}
                  </div>

                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>

                  <div className="d-grid mb-4">
                    <button 
                      className="btn btn-primary btn-lg login-btn" 
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Signing In...
                        </>
                      ) : (
                        'Sign In'
                      )}
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="mb-0">Don't have an account? <Link to="/register" className="text-decoration-none fw-bold">Sign Up</Link></p>
                  </div>
                  
                  {/* Social Login Options */}
                  <div className="divider my-4">
                    <span className="divider-text">or sign in with</span>
                  </div>
                  
                  <div className="social-login">
                    <button type="button" className="btn btn-outline-secondary social-btn">
                      <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-outline-secondary social-btn">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-outline-secondary social-btn">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}