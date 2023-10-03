import {
  Alert,
  Box,
  Button,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { app } from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";

const auth = getAuth(app);
const goggleAuth = getAuth();

const provider = new GoogleAuthProvider();
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFormSubmit = async () => {
    try {
      setOpen(true);
      const { data } = await signInWithEmailAndPassword(auth, email, password);
      console.log("signin Dagta", data);
      setErrorMsg("Successfully sign in !");
    } catch (error) {
      console.log("error", error);
      setErrorMsg(error.message);
    }
  };

  const handleGoogleForm = async () => {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
   
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
         
          const user = result.user;
          console.log('user', user)
      
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Box
      className="form data"
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <p className="text-3xl text-bold">Sign in</p>
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
          Sign in
        </Button>
        <Button variant="outlined" onClick={handleGoogleForm}>
          <GoogleIcon />
          <span>Sign with google</span>
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={900}
          onClose={handleClose}
          message={errorMsg}
          action={action}
        />
      </Box>
    </Box>
  );
};

export default Signin;
