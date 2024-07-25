import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const title = "Login";
const socialTitle = "Login With Social Media"
const btnText = "Login Now"
const socialList = [
    { link: "#", iconName: "icofont-facebook", className: "facebook", },
    { link: "#", iconName: "icofont-twitter", className: "twitter", },
    { link: "#", iconName: "icofont-linkedin", className: "linkedin", },
    { link: "#", iconName: "icofont-instagram", className: "instagram", },
    { link: "#", iconName: "icofont-pinterest", className: "pinterest", },
];
const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail, login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {


    }

    return (
        <div>
            <div className='login-section padding-tb section-bg'>
                <div className='container'>
                    <div className="account-wrapper">
                        <h3 className='title'>{title}</h3>
                        <form action='account-form' onSubmit={handleLogin}>
                            <div className='from-group'>
                                <input type='email' name='email' id='email' placeholder='Email Address *' required />
                            </div>
                            <div className='from-group'>
                                <input type='password' name='password' id='password' placeholder='Password *' required />
                            </div>
                            <div className='form-group'>
                                <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                                    <div className='checkgroup'>
                                        <input type='checkbox' name='remember' id='remember' />
                                        <label href="remember">Remember me</label>
                                    </div>
                                    <Link to="/forget" >Forget Password </Link>
                                </div>
                            </div>
                            <div className='from-group'>
                                <button type='submit' className='d-block lab-btn'>
                                    <span>{btnText}</span>
                                </button>

                            </div>
                        </form>

                        {/* account button */}
                        <div className='account-bottom'>
                            <span className='d-block cate pt-10'>Don't have an account ?<Link to="/sign-up">Sign Up</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login