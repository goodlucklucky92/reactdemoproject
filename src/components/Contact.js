// components/Contact.js
import React, { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();

      // Create an object with the form data
      const formData = {
        name,
        email,
        message
      };
      console.log(formData);
      // Make a POST request to the API endpoint
      fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then((response) => {
          if (response.ok) {
            // Display a success message or perform any other actions
            console.log('Form submitted successfully');
          } else {
            // Handle errors if the API request fails
            console.error('Form submission failed');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    };



  return (
    <>
     <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <ol>
          <li><a href="/">Home</a></li>
          <li>About Us</li>
        </ol>

      </div>
    </section>

    <section className="inner-page">
      <div className="container">
        <h1>Contact</h1>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
    </section>
   
      <section id="contact" className="contact section-bg">
<div className="container" data-aos="fade-up">

  
  <div className="row">

    <div className="col-lg-6">

      <div className="row">
        <div className="col-md-12">
          <div className="info-box">
            <i className="bx bx-map"></i>
            <h3>Our Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="info-box mt-4">
            <i className="bx bx-envelope"></i>
            <h3>Email Us</h3>
            <p>info@example.com<br/>contact@example.com</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="info-box mt-4">
            <i className="bx bx-phone-call"></i>
            <h3>Call Us</h3>
            <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
          </div>
        </div>
      </div>

    </div>

    <div className="col-lg-6 mt-4 mt-md-0">
    <form onSubmit={handleSubmit} className="php-email-form">
      <div className="row">
       <div className="col-md-12 form-group mt-3">
          <input type="text" id="name" placeholder='Name' className="form-control" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="col-md-12 form-group mt-3">
            <input type="email" id="email" placeholder='Email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
      
        <div className="col-md-12 form-group mt-3">
              <textarea id="message" name="message"  placeholder='Message' className="form-control"  value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <div className="col-md-12 form-group mt-3">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
    </div>

  </div>

</div>
</section>
    </>
  );
};

export default Contact;
