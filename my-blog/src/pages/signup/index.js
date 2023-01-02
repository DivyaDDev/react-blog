import './index.css';
import { Link } from "react-router-dom";

function SignUp() {

  const handleSubmit = () => {
    console.log('here')
  }

  return (
    <div className='signupContainer'>
      <form onSubmit={handleSubmit}>
        <h2 className="form-signup-heading"> Sign Up </h2> 
        <div className="formItem">
        <label htmlFor="inputEmail" className="sr-only"> Name</label> 
        <input type="text" id="inputName" className="form-control" placeholder="Name" required autoFocus />
        </div>
        <div className="formItem">
        <label htmlFor="inputEmail" className="sr-only"> Email address</label> 
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
        </div>
        <div className="formItem">
        <label htmlFor="inputPassword" className="sr-only"> Password</label> 
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        </div>
        
        <Link to={`/`}><button className="btn btn-lg btn-primary btn-block" type="button"> Back </button></Link>
        <button className="btn btn-lg btn-primary btn-block" type="submit"> Sign Up </button>
      </form>
    </div>
  );
}

export default SignUp;
