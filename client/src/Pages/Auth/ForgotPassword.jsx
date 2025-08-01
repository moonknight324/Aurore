import React, { useState } from "react";
import axios from "axios";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/send-reset-password-email",
        { email }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  return (
    <div className="loginPage">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Forgot Password</h2>
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
            <button className="btn" type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
