import { createContext } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const   firebaseConfig = {
  apiKey: "AIzaSyBD6mNalWvXhHhcM3D760Q7tvEB69MIKGs",
  authDomain: "react-app-736db.firebaseapp.com",
  projectId: "react-app-736db",
  storageBucket: "react-app-736db.appspot.com",
  messagingSenderId: "385028556813",
  appId: "1:385028556813:web:1d6f3b5b6e4e1acf4d2d44",
  databaseURL:"https://react-app-736db-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const firbaseContext = createContext(null);
export const FirbaseProvider = (props) => {};
return <FirbaseProvider.provider values={{}}>
    {props.children}
</FirbaseProvider.provider>;
