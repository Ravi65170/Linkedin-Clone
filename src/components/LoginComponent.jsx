import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, seTCredentails] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed in to Linkedin!");
      navigate("/home");
    } catch (err) {
      toast.error("Please check your Credentails");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
    navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign-in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              seTCredentails({ ...credentails, email: event.target.value })
            }
            className="common-input"
            placeholder="Enter your Email"
          />

          <input
            onChange={(event) =>
              seTCredentails({ ...credentails, password: event.target.value })
            }
            className="common-input"
            placeholder="Enter your Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />

      <div className="google-btn-container">
        <GoogleButton className="google-btn" onClick={googleSignIn} />
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}
