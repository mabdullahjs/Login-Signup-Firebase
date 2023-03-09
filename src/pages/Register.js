import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebase";

function Register() {
  // password show or hidden
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // value state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    // navigation
    const navigate = useNavigate();

  //register User Function
  const registerUser = () => {
    const obj = {
      email: email,
      password: password,
    };
    signUpUser(obj)
    .then((res) => {
      console.log(res);
      setEmail("");
      setPassword("");
      navigate("/")
    })
    .catch((err)=>{
      console.log(err);
    })
  };


  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography className="mb-4" variant="h4">
        Register User
      </Typography>
      <TextField
        className="mb-3"
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        sx={{ width: "25rem" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl sx={{ width: "25rem" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          onChange={(e) => setPassword(e.target.value)}
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
      <Button
        onClick={registerUser}
        size="large"
        className="mt-5"
        variant="contained"
      >
        Register
      </Button>
      <Typography
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer" }}
        className="text-primary mt-2"
      >
        Already a user Please Login!
      </Typography>
    </Box>
  );
}

export default Register;
