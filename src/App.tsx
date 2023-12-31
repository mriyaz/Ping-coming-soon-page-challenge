import React, { useState } from 'react';
import logo from './images/logo.svg';
import dashboard from './images/illustration-dashboard.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './App.css';

interface FormErrors {
  email?: string;
}

const App: React.FC = () => {

  const [formData, setFormData] = useState({
    email: ''
  });

  const [formSuccess, setFormSuccess] = useState(false);

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const validataForm = () => {
    let errors: FormErrors = {};
    let formIsValid = true;
    if (!formData.email) {
      errors.email = 'Whoops! It looks like you forgot to add your email';
      formIsValid = false;
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
      formIsValid = false;
    }
    setFormErrors(errors);
    return formIsValid;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validataForm()) {
      setFormSuccess(true);
      console.log('form submitted!');
    }
    else {
      setFormSuccess(false);
    }
  }

  return (

    <div className="container mx-auto h-screen text-center sm:w-1/2 ">
      <header className="flex justify-center align-middle my-12 sm:my-8">
        <img src={logo} className='max-w-12 sm:max-w-14' alt="logo" />
      </header>

      <main className="px-12 py-4">
        <h1 className='text-3xl pb-4 sm:text-4xl text-gray-400'>We are launching <span className="font-bold text-black">soon!</span></h1>
        <p className='text-xs pb-6'>Subscribe and get notified</p>

        {/* FORM */}

        <form action="#" method="post" className='sm:flex sm:items-center sm:justify-center sm:gap-2 sm:mx-12 ' onSubmit={handleSubmit} noValidate>
          <input type="email" name="email" placeholder='Your Email Address'
            className='border border-gray-300 px-6 py-3 rounded-full text-xs w-full sm:w-3/5' onChange={handleChange} /> <br />

          {/* Show error/success on the mobile */}
          {formErrors.email && (<p className='text-secondary-light-red text-xs italic sm:hidden'>{formErrors.email}</p>)}
          {formSuccess && (<p className='text-green-500 text-xs italic sm:hidden'>Form successfully submitted!</p>)}

          <br />
          <button type="submit" className='bg-primary-blue text-white px-6 py-3 rounded-full text-xs w-full sm:w-2/5 shadow-lg '>Notify Me</button>
        </form>

        {/* Show error/success on the desktop */}
        {formErrors.email && (<p className='text-secondary-light-red text-xs italic hidden sm:block text-left pl-16'>{formErrors.email}</p>)}
        {formSuccess && (<p className='text-green-500 text-xs italic hidden sm:block text-left pl-16'>Form successfully submitted!</p>)}

      </main>

      <section className='px-12 py-4 mb-8'>
        <img src={dashboard} alt="dashboard" />
      </section>

      <footer className="p-4">

        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex items-center justify-center w-6 h-6 border border-gray-400 rounded-full">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="flex items-center justify-center w-6 h-6 border border-gray-400 rounded-full">
            <FontAwesomeIcon icon={faTwitter} /></div>
          <div className="flex items-center justify-center w-6 h-6 border border-gray-400 rounded-full">
            <FontAwesomeIcon icon={faInstagram} /></div>
        </div>
        <p className="text-xs text-gray-400">&copy;Copyright Ping. All rights reserved.</p>

      </footer>
    </div>
  );
}

export default App;
