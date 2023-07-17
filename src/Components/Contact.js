import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    // Show the dialog box
    setShowDialog(true);

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');

    // Redirect to the home page after 3 seconds
    setTimeout(() => {
      setShowDialog(false);
      navigate('/');
    }, 3000);
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {showDialog && (
        <div className="alert alert-success mt-3" role="alert">
          We'll reach you out soon!
        </div>
      )}
    </div>
  );
};

export default Contact;
