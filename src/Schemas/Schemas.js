import * as yup from 'yup'

const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  userName: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  age: yup.number().positive('age must be a positive number').integer().required('Required'),
  password: yup.string().min(5).max(20)
    .matches(passwordRule, {message: 'Please create a stronger password'})
    .required('Required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required'),
  checkBox: yup
    .boolean()
    .oneOf([true], 'Please accept the Terms of service') 
})

export const loginSchema = yup.object().shape({
  email: yup.string().email('Incorrect email').required('Required'),
  password: yup.string().min(5).max(20)
  .matches(passwordRule, {message: 'Incorrect password'})
  .required('Required'),
})