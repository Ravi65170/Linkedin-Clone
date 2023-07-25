import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentails, seTCredentails] = useState({});
  const login = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created");
      navigate("/home");
    } catch (err) {
      toast.error("Cannot Create your Account");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
  };

  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your professional life</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              seTCredentails({ ...credentails, email: event.target.value })
            }
            className="common-input"
            placeholder="Email or phone number"
          />

          <input
            onChange={(event) =>
              seTCredentails({ ...credentails, password: event.target.value })
            }
            className="common-input"
            placeholder="Password(6 or more charecters)"
          />
        </div>
        <button onClick={login} className="login-btn">
          Agree & Join
        </button>
      </div>
      <hr className="hr-text" data-content="or" />

      <div className="google-btn-container">
        <GoogleButton className="google-btn" onClick={googleSignIn} />
        <p className="go-to-signup">
          Already on LinkedIn?
          <span className="join-now" onClick={() => navigate("/")}>
            Sign-in
          </span>
        </p>
      </div>
    </div>
  );
}
