import Input from "./Input";
import useInput from "../hooks/Input";

function isEmail(value) {
  return value.includes("@");
}

function isNotEmpty(value) {
  return value.trim() !== "";
}

function hasMinLength(value, min) {
  return value.trim().length >= min;
}

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }

    console.log("submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div>
          <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            value={emailValue}
            onChange={handleEmailChange}
            error={emailHasError && "Please enter a valid email."}
          />
        </div>
        <div>
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            onBlur={handlePasswordBlur}
            value={passwordValue}
            onChange={handlePasswordChange}
            error={
              passwordHasError && "Password must be at least 6 characters."
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
