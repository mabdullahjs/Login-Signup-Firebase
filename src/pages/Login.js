import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";
import { loginUser } from "../config/firebase";

function Login() {
    // password show or hidden
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // value state
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    //login User Function
    const loginSingleUser = ()=>{
        // console.log(email);
        // console.log(password);
        const obj = {
          email : email,
          password : password
        }
        loginUser(obj)
        .then((res)=>{
          console.log(res);
          setEmail("");
          setPassword("");
          navigate("/home");
        })
        .catch((err)=>{
          console.log(err);
        })
    }
    // navigation
    const navigate = useNavigate();
  
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography className="mb-4" variant="h4">
        Login User
      </Typography>
      <TextField
        className="mb-3"
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        sx={{width:"25rem"}}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <FormControl sx={{width:"25rem"}} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          onChange={(e)=>setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button onClick={loginSingleUser} size="large" className="mt-5" variant="contained">Login</Button>
      <Typography onClick={()=>navigate("/register")} sx={{cursor:"pointer"}} className="text-primary mt-2">Not a user please register!</Typography>
    </Box>
  );
}

export default Login;
