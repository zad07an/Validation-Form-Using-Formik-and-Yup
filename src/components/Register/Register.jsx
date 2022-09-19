import { useFormik } from 'formik'
import React from 'react'
import { registerSchema } from '../../Schemas/Schemas'
import './Register.css'

export default function Register() {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    actions.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      checkBox: false,
    },
    validationSchema: registerSchema,
    onSubmit
  })

  return (
    <div className='registerContainer'>
      <div className="mainFormContainer">
        <form className='formContainer' onSubmit={formik.handleSubmit}>
          <div className="fnlnInputBox">
            <div className="fnBox">
              <label htmlFor="" className='fnLabel'>First name</label>
              <input
                type="text"
                className={`fnInput registerInput ${formik.errors.firstName && formik.touched.firstName ? 'input-error' : ''}`}
                id='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='First name'
              />
              {formik.errors.firstName && formik.touched.firstName ? <span className='error-message'>{formik.errors.firstName}</span> : null}
            </div>
            <div className="lnBox">
              <label htmlFor="" className="lnLabel">Last name</label>
              <input
                type="text"
                className={`lnInput registerInput ${formik.errors.lastName && formik.touched.lastName ? 'input-error' : ''}`}
                id='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Last name'
              />
              {formik.errors.lastName && formik.touched.lastName ? <span className='error-message'>{formik.errors.lastName}</span> : null}
            </div>
          </div>
          <div className="inputsBox">
            <div className="usernameBox">
              <label htmlFor="" className="usernameLabel">Username</label>
              <input
                type="text"
                className={`usernameInput registerInput ${formik.errors.userName && formik.touched.userName ? 'input-error' : ''}`}
                id='userName'
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Username'
              />
              {formik.errors.userName && formik.touched.userName ? <span className='error-message'>{formik.errors.userName}</span> : null}
            </div>
            <div className="emailBox">
              <label htmlFor="" className="emailLabel">Email</label>
              <input
                type="email"
                className={`emailInput registerInput ${formik.errors.email && formik.touched.email ? 'input-error' : ''}`}
                id='email'
                value={formik.values.email}
                placeholder='Email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? <span className='error-message'>{formik.errors.email}</span> : null}
            </div>
            <div className="ageBox">
              <label htmlFor="" className="ageLabel">Age</label>
              <input
                type="number"
                className={`ageInput registerInput ${formik.errors.age && formik.touched.age ? 'input-error' : ''}`}
                id='age'
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Age'
              />
              {formik.errors.age && formik.touched.age ? <span className='error-message'>{formik.errors.age}</span> : null}
            </div>
            <div className="passwordBox">
              <label htmlFor="" className="passwordLabel">Password</label>
              <input
                type="password"
                className={`passwordInput registerInput ${formik.errors.password && formik.touched.password ? 'input-error' : ''}`}
                id='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Password'
              />
              {formik.errors.password && formik.touched.password ? <span className='error-message'>{formik.errors.password}</span> : null}
            </div>
            <div className="confirmPasswordBox">
              <label htmlFor="" className="confirmPasswordLabel">Confirm Password</label>
              <input
                type="password"
                className={`confirmPasswordInput registerInput ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'input-error' : ''}`}
                id='confirmPassword'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Confirm Password'
              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword ? <span className='error-message'>{formik.errors.confirmPassword}</span> : null}
            </div>
            <div className="acceptBox">
              <div className="checkBoxInputBox">
                <input
                  type="checkbox"
                  className='checkboxInput'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.checkBox}
                  name='checkBox' />
                <span className='termsText'>By signing up you agree to our <a href="#" className='linkTerms'>Terms</a> of Service.</span>
              </div>
              <div className="checkBoxErrorBox">
                {
                  formik.errors.checkBox && formik.touched.checkBox ? <span className='error-message'>{formik.errors.checkBox}</span> : null
                }
              </div>
            </div>
          </div>
          <button type="submit" disabled={formik.isSubmitting} className="submitButton">Register</button>
        </form>
      </div>
    </div>
  )
}
