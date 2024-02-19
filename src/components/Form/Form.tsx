import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Form.css";

const Form: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<number | "">("");
  const [password, setPassword] = useState<number | string | "">("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setPhoneNumber(Number(value));
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value)) || typeof value === "string") {
      setPassword(value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validation
    if (!phoneNumber) {
      alert("Enter phone number");
      return;
    } else if (!password) {
      alert("Enter password");
      return;
    }

    // Navigate to another page
    navigate("/MainComponent");
  };

  return (
    <main>
        <div id="login-form-wrap">
        <h2>SigIn</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <p>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Phone number"
            />
          </p>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="passwordField"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            <span
              id="togglePassword"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <p>
            <input type="submit" id="login" value="Login" />
          </p>
        </form>
      </div>
  
    </main>
    
  );
};

export default Form;
