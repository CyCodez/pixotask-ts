import useForm from "../Hooks/use-form";
import "./form.css";

const Form: React.FC = (): JSX.Element => {
  const {
    phoneNumber,
    password,
    showPassword,
    handlePasswordChange,
    handlePhoneNumberChange,
    togglePasswordVisibility,
    handleSubmit,
  } = useForm();

  return (
    <main>
      <div id="login-form-wrap">
        <h2>Sign In</h2>
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
