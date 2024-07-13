import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSigninform, setisSigninform] = useState(true);
  const toggleSignInForm = () => {
    setisSigninform(!isSigninform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
          alt="bg-img"
        />
      </div>
      <form
        action=""
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSigninform ? "Sign In" : "Sign up"}
        </h1>
        {!isSigninform && (
          <input
            type="text"
            placeholder="Full-name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSigninform ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSigninform
            ? "New to Netflix? Sign Up Now"
            : "Already registered?Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
