import React, { useState } from "react";
import "./Login.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaKey } from "react-icons/fa";
import truckIcon from "../../assets/images/truckIcon.png";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin@123") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={5} className="login-image"></Col>

        <Col md={7} className="login-form">
          <div className="d-flex flex-column align-items-center mb-4">
            <img src={truckIcon} alt="truck" width="100px" />
            <div
              className="login-box"
              style={{
                borderRadius: "17px",
                borderWidth: "3px",
              }}
            >
              <Form>
                <h3>Login</h3>
                <h6>Welcome back! Log in to your account.</h6>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaUser />
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaKey />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </Form.Group>
                {error && (
                  <p className="error" style={{ color: "red" }}>
                    {error}
                  </p>
                )}
                <div className="d-flex justify-content-end">
                  <Button
                    variant="primary"
                    type="submit"
                    className="signin-button"
                    onClick={handleLogin}
                  >
                    Sign In
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
