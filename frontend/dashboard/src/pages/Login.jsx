import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Deliverable allows ANY password — but email must match test merchant
    if (email === "test@example.com") {
      localStorage.setItem("merchantEmail", email);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Merchant Login</h2>

        <form data-test-id="login-form" onSubmit={handleSubmit}>
          <input
            data-test-id="email-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            data-test-id="password-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" data-test-id="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
