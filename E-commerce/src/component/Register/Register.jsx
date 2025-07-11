import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import * as Yup from 'yup'
import { userContext } from '../../context/userContext'
import { useContext } from 'react'
import './Register.module.css'

export default function Register() {
  let {setLogin} = useContext(userContext)
  
  let navigate = useNavigate()
  async function handleRegister(formsData){
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', formsData)
    .then((response) => {
      if(response.data.message === 'success'){
        localStorage.setItem('userToken', response.data.token)
        setLogin(response.data.token)
        navigate('/login')
      }
    })
    .catch((error) => console.log('error', error))
  }

  let validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Min length is 3').max(10, 'Max length is 10'),
    email: Yup.string().required('Email is required').email('Enter valid email'),
    phone: Yup.string().required('Phone is required').matches(/^01[1250][0-9]{8}$/, 'Phone is not valid'),
    password: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{6,8}$/, 'Password must start with uppercase letter and be 7-9 characters'),
    rePassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password')], 'Passwords must match'),
  })

  let formik = useFormik({
    initialValues:{
      name:'',  
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },
    validationSchema: validationSchema,
    onSubmit: handleRegister
  })

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card register-card">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <div className="brand-logo mb-3">
                    <i className="fas fa-user-plus"></i>
                  </div>
                  <h1 className="register-title">Create Account</h1>
                  <p className="text-muted">Join our community today</p>
                </div>
                
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="UserName" className="form-label">Full Name</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-user text-primary"></i>
                      </span>
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className={`form-control form-control-lg ${
                          formik.touched.name && formik.errors.name ? 'is-invalid' : ''
                        }`}
                        name="name"
                        value={formik.values.name}
                        id="UserName"
                        placeholder="Enter your name"
                      />
                    </div>
                    {formik.touched.name && formik.errors.name && (
                      <div className="invalid-feedback d-block">{formik.errors.name}</div>
                    )}
                  </div>

                  <div className="form-group mb-3">
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

                  <div className="form-group mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-phone text-primary"></i>
                      </span>
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="tel"
                        className={`form-control form-control-lg ${
                          formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''
                        }`}
                        name="phone"
                        value={formik.values.phone}
                        id="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="invalid-feedback d-block">{formik.errors.phone}</div>
                    )}
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
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
                        placeholder="Create a password"
                      />
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <div className="invalid-feedback d-block">{formik.errors.password}</div>
                    )}
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="rePassword" className="form-label">Confirm Password</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-shield-alt text-primary"></i>
                      </span>
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        className={`form-control form-control-lg ${
                          formik.touched.rePassword && formik.errors.rePassword ? 'is-invalid' : ''
                        }`}
                        name="rePassword"
                        value={formik.values.rePassword}
                        id="rePassword"
                        placeholder="Confirm your password"
                      />
                    </div>
                    {formik.touched.rePassword && formik.errors.rePassword && (
                      <div className="invalid-feedback d-block">{formik.errors.rePassword}</div>
                    )}
                  </div>

                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="iAgree" required />
                    <label className="form-check-label" htmlFor="iAgree">
                      I agree to the <Link to="/terms" className="text-decoration-none fw-bold">Terms & Conditions</Link>
                    </label>
                  </div>

                  <div className="d-grid mb-4">
                    <button 
                      className="btn btn-primary btn-lg register-btn" 
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Creating Account...
                        </>
                      ) : (
                        'Create Account'
                      )}
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="mb-0">Already have an account? <Link to="/login" className="text-decoration-none fw-bold">Sign In</Link></p>
                  </div>
                  
                  <div className="divider my-4">
                    <span className="divider-text">or sign up with</span>
                  </div>
                  
                  <div className="social-register">
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
  )
}