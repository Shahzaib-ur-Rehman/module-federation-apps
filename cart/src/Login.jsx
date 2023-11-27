import React, { useState } from "react";
import { login, useLoggedIn } from "./cart";

const Login = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");
  if (loggedIn) return null;
  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 backdrop-white"
          style={{
            width: 300,
            top: "2rem",
            left:-250
          }}
        >
            <input type="text"
            placeholder="user name"
            value={username}
            onChange={(event)=> setUsername(event.target.value)}
            className="border text-sm border-gray-200 p-2 rounded-md w-full"
            />
             <input type="password"
            placeholder="enter password"
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
            className="border text-sm border-gray-200 p-2 rounded-md w-full"
            />
            <button
            className="bg-green-900 text-white py-2 px-5"
            onClick={()=>login(username, password)}
            id="loginbtn"
            >Login</button>

        </div>
      )}
    </>
  );
};

export default Login;
