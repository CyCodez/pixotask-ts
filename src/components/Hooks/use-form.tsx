import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function useForm(): {
  phoneNumber: string | "";
  password: string | "";
  showPassword: boolean;
  handlePhoneNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  togglePasswordVisibility: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
} {
  const [phoneNumber, setPhoneNumber] = useState<string | "">("");
  const [password, setPassword] = useState<string | "">("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setPhoneNumber(value);
    }
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    if (!isNaN(Number(value)) || typeof value === "string") {
      setPassword(value);
    }
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (phoneNumber.length < 11 || !phoneNumber) {
      alert("Enter a valid phone number");
      return;
    } else if (password.length < 4 || !password) {
      alert("Enter a valid password");
      return;
    }

    navigate("/MainComponent");
  };

  return {
    phoneNumber,
    password,
    showPassword,
    handlePhoneNumberChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleSubmit,
  };
}

export default useForm;
