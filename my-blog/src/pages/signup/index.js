import './index.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('Something went wrong')
  const navigate = useNavigate();

  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw = JSON.stringify({
      email, password, name
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://63b250a70d51f5b297272159.mockapi.io/api/v1/users", requestOptions)
      .then(response => response.text())
      .then(result => navigate("/landing"))
      .catch(error => setError('Something Went Wrong'));
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className='signupContainer'>
      <form onSubmit={handleSubmit}>
        <h2 className="form-signup-heading"> Sign Up </h2> 
        <div className="formItem">
        <label htmlFor="inputEmail" className="sr-only"> Name</label> 
        <input type="text" id="inputName" value={name} onChange={handleNameChange} className="form-control" placeholder="Name" required autoFocus />
        </div>
        <div className="formItem">
        <label htmlFor="inputEmail" className="sr-only"> Email address</label> 
        <input type="email" id="inputEmail" value={email} onChange={handleEmailChange} className="form-control" placeholder="Email address" required autoFocus />
        </div>
        <div className="formItem">
        <label htmlFor="inputPassword" className="sr-only"> Password</label> 
       <input type="password" minlength="8" id="inputPassword" value={password} onChange={handlePasswordChange} className="form-control" placeholder="Password" required />
        </div>
        
        <Link to={`/`}><button className="btn btn-lg btn-primary btn-block" type="button"> Back </button></Link>
        <button className="btn btn-lg btn-primary btn-block" type="submit"> Sign Up </button>
        {<div className='error'>{error}</div>}
      </form>
    </div>
  );
}

export default SignUp;
