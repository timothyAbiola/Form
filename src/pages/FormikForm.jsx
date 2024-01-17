import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormikForm = () => {
    let formik = useFormik({
        initialValues : {
            firstname : '',
            email : '',
            password : '',
        },
        onSubmit : (values) =>{
            console.log(values)
        },
        validationSchema : Yup.object({
            firstname : Yup.string().required("This feed is required"),
            email : Yup.string().required("This feed is required").email("enter a valid email adddress"),
            password : Yup.string().required("This feed is required")
        })
    })
    // console.log(formik.errors)
  return (
    <>
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id='firstname' name='firstname' className={formik.touched.firstname && formik.errors.firstname ? 'form-control is-invalid' : 'form-control'} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <small id="emailHelp" className='form-text text-muted'> {formik.touched.firstname && formik.errors.firstname} </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'} id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <small id="emailHelp" className="form-text text-muted"> {formik.touched.email && formik.errors.email} </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'} name='password' id="exampleInputPassword1" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <small id="emailHelp" className="form-text text-muted"> {formik.touched.password && formik.errors.password} </small>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default FormikForm