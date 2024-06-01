import './Contact.css';
import React, { useState } from 'react';

export default function Contact() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='contact'>
      <form onSubmit={handleSubmit} className='submitForm'>
        <label className='contactLabel'>
          Name:

        </label><input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label className='contactLabel'>
          Email:

        </label><input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label className='contactLabel'>
          Message:

        </label><textarea name="message" value={formData.message} onChange={handleChange} />
        <button type="submit">Submit</button>

        <p className='contactMe'>Contact Me: joelhansen22@gmail.com</p>
      </form>
    </div>
  )
}