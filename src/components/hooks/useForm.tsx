import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function useForm() {
  const [phoneNumber, setPhoneNumber] = useState<number | "">("");
  const [password, setPassword] = useState<number | string | "">("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
  return{phoneNumber,
password,
showPassword,
handlePasswordChange,
handlePhoneNumberChange,
togglePasswordVisibility,
handleSubmit}
}
export default useForm