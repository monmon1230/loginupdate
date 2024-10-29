
import {  Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import React, {  useState } from "react";
import { Button, Form } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

const Login = ({fullWidth}) => {
  // const[email,setemail]=useState('')
   // const[passward,setpassward]=useState('')
   const [errors, setErrors] = useState({});
   const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    if (validateInputs()) {
      console.log(inputs);
      // If inputs are valid, navigate to the next page
      navigate('/signin');
    }
  };

  const validateInputs = () => {
    let tempErrors = {};
    if (!inputs.email) {
      alert('enter email pls')
      tempErrors.email = "Email is required";
    } else {
      // التعبير النمطي للتحقق من صيغة البريد الإلكتروني
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputs.email)) {
        tempErrors.email = "Invalid email format";
      }
    }
    if (!inputs.password) {
      tempErrors.password = "Password is required";
    }
  
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };




  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
     
 <Form onSubmit={handleSubmit} noValidate>
<TextField
style={{backgroundColor:'white',width:'30rem',justifyContent:'center',display:'flex'}}
  variant="outlined"
  margin="normal"
  required 
  id="email"
  value={inputs.email}
  label="Email Address"
  name="email"
  autoComplete="email"
  autoFocus
  onChange={(handleChange)}
/>
<TextField
style={{backgroundColor:'white'}}
  variant="outlined"
  margin="normal"
  required
  fullWidth
  name="password"
  label="Password"
  type="password"
  id="password"
  autoComplete="current-password"
  onChange={handleChange}
/>
<FormControlLabel
style={{color:'white'}}
  control={<Checkbox value="remember" color="primary" />}
  label="Remember me"
/>

<Button
  type="submit"
  fullWidth
  variant="contained"
  style={{color:'white',backgroundColor:'purple',cursor:'pointer'}}


>
  Sign In
</Button>

<Grid container>
  <Grid item xs>
    <Link to='/forgetpassword' variant="body2"   style={{color:'white',}}>
      Forgot password?
    </Link>
  </Grid>
  <Grid item>
    <Link to='/forgetpassword' variant="body2"style={{color:'white'}}>
      {"Don't have an account?"}
    </Link>
  </Grid>
</Grid>
</Form> 
</div>
  );
};

export default Login;


