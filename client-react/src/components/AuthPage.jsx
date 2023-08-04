import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  AuthPage.propTypes = {
    onAuth: PropTypes.func.isRequired,
  };
  const onLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
      })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#222" }}>
      <div style={{ background: "#333", width: "350px", padding: "25px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <form onSubmit={onLogin} style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#fff", marginBottom: "16px" }}>Login</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            style={{ border: "1px solid #555", borderRadius: "4px", padding: "7px", width: "100%", marginBottom: "8px", outline: "none", backgroundColor: "#444", color: "#fff" }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            style={{ border: "1px solid #555", borderRadius: "4px", padding: "8px", width: "100%", marginBottom: "16px", outline: "none", backgroundColor: "#444", color: "#fff" }}
            onChange={(e) => setSecret(e.target.value)}
          />
          <button
            type="submit"
            style={{ background: "#007BFF", color: "#fff", borderRadius: "4px", padding: "8px", width: "100%", cursor: "pointer", transition: "background-color 0.2s", border:"none" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
            onMouseDown={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseUp={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            LOG IN
          </button>
        </form>
        <form onSubmit={onSignup}>
          <div style={{ fontSize: "20px", fontWeight: "bold", color: "#fff", marginBottom: "16px" }}>or Sign Up</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            style={{ border: "1px solid #555", borderRadius: "4px", padding: "8px", width: "100%", marginBottom: "8px", outline: "none", backgroundColor: "#444", color: "#fff" }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            style={{ border: "1px solid #555", borderRadius: "4px", padding: "8px", width: "100%", marginBottom: "16px", outline: "none", backgroundColor: "#444", color: "#fff" }}
            onChange={(e) => setSecret(e.target.value)}
          />
          <button
            type="submit"
            style={{ background: "#28A745", color: "#fff", borderRadius: "4px", padding: "8px", width: "100%", cursor: "pointer", transition: "background-color 0.2s", border:"none" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e7e34")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#28A745")}
            onMouseDown={(e) => (e.target.style.backgroundColor = "#1e7e34")}
            onMouseUp={(e) => (e.target.style.backgroundColor = "#28A745")}
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
