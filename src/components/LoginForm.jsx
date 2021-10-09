import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const handelSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      "project-ID": "17601c87-0dca-4170-bd81-d5a2f0ab7049",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Sorry..!incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="input"
            placeholder="password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
