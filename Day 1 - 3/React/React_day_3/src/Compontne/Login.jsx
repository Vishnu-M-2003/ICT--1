import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let logInAndLogOut = () => {
    isLoggedIn == false ? setIsLoggedIn(true) : setIsLoggedIn(false);
  };

  let content = [{ heading: "", button: "" }];

  content =
    isLoggedIn == false
      ? { ...content, heading: "Please Login", button: "LOGIN" }
      : { ...content, heading: "Welcome", button: "LOGOUT" };
  console.log(content);

  return (
    <div>
      <h1>content.heading</h1>
      <button onClick={logInAndLogOut}>content.button</button>
    </div>
  );
}

export default Login;
