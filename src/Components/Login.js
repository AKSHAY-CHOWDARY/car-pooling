import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  let navigate = useNavigate();
  return (
    <div className="bro">
      <Header />
      <div className="login mx-auto m-5">
        <h1>Login</h1>
        <form className="mx-auto w-50 text-center">
          <div className="input-box mx-auto">
            <input
              type="username"
              className="form-control mb-3"
              placeholder="username"
            ></input>
          </div>
          <div className="input-box mx-auto">
            <input
              type="password"
              className="form-control mb-3"
              placeholder="password"
            ></input>
          </div>
          <button
            type="submit"
            class="btn"
            onClick={() => navigate("/login/CarPool")}
          >
            Login
          </button>
          <div class="register-link">
            <p>
              Don't have an account?{" "}
              <a href="#" class="href" onClick={() => navigate("/Register")}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
