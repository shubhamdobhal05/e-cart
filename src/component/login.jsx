//login component for loggin in the user

import React, { useState } from "react";
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3002/register", user)
            .then(res => {
                console.log(res);
            })
    }
    return (
        <>

        
        <main className="form-signin">
            <form>

                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" name="email"
                        value={user.email} onChange={handleChange} placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                        name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me</input>
                    </label>
                </div>
                <NavLink to="/cart" className="w-100 btn btn-lg btn-primary" onClick={login}>Sign in</NavLink>

            </form>
        </main>
        </>
    )
}

export default Login;


