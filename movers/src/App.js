import React, { useState, useEffect } from "react";
import "./App.css";
import ResponsiveDrawer from "./pages/Sidebar/Sidebar";
import { BrowserRouter, Outlet } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  // Retrieve the login state from localStorage on component mount
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Function to handle user login
  const handleLogin = () => {
    // You can implement your login logic here
    // For this example, we'll just set isLoggedIn to true
    setIsLoggedIn(true);
    // Store the login state in localStorage
    localStorage.setItem("isLoggedIn", "true");
  };

  // Use useEffect to check the login status on component mount
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";
    if (storedLoginStatus !== isLoggedIn) {
      setIsLoggedIn(storedLoginStatus);
    }
  }, [isLoggedIn]);

  return (
    <div>
      <BrowserRouter>
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <ResponsiveDrawer />
            <Outlet />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
