import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Form() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    

    // If successful, we want to clear out 
    setUserName('');
    setMessage('');
    setEmail('');
  };

   return (
    <div className="container ">
      <h1 className='text-center p-4'>Contact Form</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-floating mb-3">
          <input
          value={email}
          className="form-control"
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          id="floatingInput"
        />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
          value={userName}
          className="form-control"
          name="username"
          onChange={(e)=>setUserName(e.target.value)}
          type="text"
          placeholder="username"
          id="floatingInput"
        />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
          value={message}
          className="form-control"
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          id="floatingInput"
        />
          <label htmlFor="floatingInput">Message</label>
        </div>
        <button className='p-3' type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}


export default Form;