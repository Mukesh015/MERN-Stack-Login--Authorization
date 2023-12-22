import { useState } from "react";
import './app.css'
import axios from 'axios'

function Signup() {
  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:5173/register',{name,email,password})
    .then(result =>console.log(result))
    .then(err =>console.log(err))
  }
  return (

    <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example1cg" placeholder="Enter your name" className="form-control form-control-lg"
                        onChange={(e)=> setName(e.target.value)} />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3cg" placeholder="Enter a Email" className="form-control form-control-lg"
                        onChange={(e)=> setEmail(e.target.value)} />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4cg" placeholder="Create a Password" className="form-control form-control-lg"
                        onChange={(e)=> setPassword(e.target.value)} />
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>

                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Signup;