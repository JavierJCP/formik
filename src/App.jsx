import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('invalid Email').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          toast.success('Send', {
            duration: 3000,
            position: 'bottom-right',
          });
        }}
      >
        <Form className='container m-2'>
          <div className='d-flex flex-column'>
            <label htmlFor='name' className='text-primary'>
              Name
            </label>
            <Field
              name='name'
              type='text'
              placeholder='your name'
              className='form-control'
            />
            <div className='text-danger text-center'>
              <ErrorMessage name='name' />
            </div>
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor='email'>Email</label>
            <Field
              name='email'
              type='text'
              placeholder='your email'
              className='form-control'
            />
            <ErrorMessage className='text-danger' name='email' />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor='password'>Password</label>
            <Field
              name='password'
              type='text'
              placeholder='your password'
              className='form-control'
            />
            <ErrorMessage name='password' />
          </div>

          <button type='submit' className='btn btn-primary mt-2'>
            Send
          </button>
        </Form>
      </Formik>

      <Toaster />
    </div>
  );
}

export default App;
