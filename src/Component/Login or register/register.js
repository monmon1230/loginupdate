import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, TextField, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import Particles from "react-tsparticles";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email: email,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (<div>
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        margin: "auto",
        paddingTop: "50px",
        color: "yellow",
      }}
    >
      {" "}
      <Typography variant="h6" gutterBottom>
        register
      </Typography>
      <TextField
        label="firstname"
        type="name"
        style={{ backgroundColor: "white", marginBottom: "2rem" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="lastname"
        type="name"
        style={{ backgroundColor: "white", marginBottom: "2rem" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Email"
        type="email"
        style={{ backgroundColor: "white", marginBottom: "2rem" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        style={{ backgroundColor: "white", marginBottom: "2rem" }}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="confirmPassword"
        type="password"
        value={password}
        style={{ backgroundColor: "white", marginBottom: "2rem" }}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />
      <Link to={"/"}>
        <Button
          style={{ backgroundColor: "gray", width: "100%" }}
          onClick={console.log(email, password)}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Login
        </Button>
      </Link>{" "}
    </Box>
    </div>
  );
};

export default Register;
