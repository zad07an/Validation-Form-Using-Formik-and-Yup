import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginSchema } from '../../Schemas/Schemas'
import './Login.css'


export default function Login() {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    actions.resetForm()
    navigate('/home')
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit
  })

  return (
    <div className='loginContainer'>
      <div className="loginTitleBox">
        <h1 className="loginTitle"><span style={{color: '#d3a02a'}}>Website</span> Name</h1>
      </div>
      <form className='loginForm' onSubmit={formik.handleSubmit}>
        <div className="loginTextBox">
          <h3 className="loginText">Log <span style={{color: '#d3a02a'}}>In</span></h3>
        </div>
        <div className="loginInputsContainer">
          <div className="emailInputBox loginInputBoxes">
            <input 
            type="email" 
            className="emailInput loginInputs" 
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Email or username' />
            {formik.errors.email && formik.touched.email ? <span style={{color: '#fc8181', fontSize: '12px'}}>{formik.errors.email}</span> : null}
          </div>
          <div className="passwordInputBox loginInputBoxes">
            <input 
            type="password"
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            className="passwordInput loginInputs" 
            placeholder='Password' />
            {formik.errors.password && formik.touched.password ? <span style={{color: '#fc8181', fontSize: '12px'}}>{formik.errors.password}</span> : null}
          </div>
        </div>
        <div className="loginSubmitButtonBox">
          <button className="loginSubmitButton" onClick={onSubmit}>Submit</button>
        </div>
        <div className="registerLinkBox">
          <Link to='/register' className="registerLinkText">Do you have not an account?</Link>
        </div>
      </form>
    </div>
  )
}
