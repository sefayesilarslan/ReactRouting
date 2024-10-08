import React from "react";
import { useFormik } from 'formik';
import validations from "./Validation";

const SignupForm = () => {
  const { handleSubmit, handleChange,handleBlur, values, isSubmitting, errors , touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000))
      
      if(values.email==='test@test.com'){
        return bag.setErrors({email:'Bu mail adresi kullanılıyor!!!!'})
      }

      bag.resetForm();
    },
    validationSchema: validations,
  });

  return (

    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', width:'250px' }}>  

      
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur('firstName')}
        value={values.firstName}
      />
      {
        errors.firstName && touched.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>
      }
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur('lastName')}
        value={values.lastName}
      />
      {
        errors.lastName && touched.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>
      }
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur('email')}
        value={values.email}
      />
      {
        errors.email && touched.email && <div style={{ color: 'red' }}>{errors.email}</div>
      }
      <button type="submit" disabled={isSubmitting}>Submit</button>
      </div>
    </form>
  );
};

function Contact() {
  return (
    <div>
      <h2>İletişim</h2>
      <SignupForm />
    </div>
  );
}

export default Contact;
