import React, { useState } from "react";
import { app } from "../../firebase";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Box, Button, TextField } from "@mui/material";
const auth = getAuth(app);
const Auth = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");

  const handleFormSubmit = async () => {
    console.log('email,password', email,password)
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log('data', data)
    alert("hey")
    setOpen(true) ;
  };

  
  return (
    <Box
      className="form data"
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <p>Sign up</p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "1000px",
          margin: "auto",
          gap: "5px",
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          value={password}  
        
          onChange={(e) => setPassword(e.target.value)}
        />
    
        <Button variant="outlined" onClick={handleFormSubmit}>
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Auth;
