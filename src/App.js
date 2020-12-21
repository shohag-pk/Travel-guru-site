import React, { createContext, useState } from "react";
import { DestinationOfTravel } from "./FakeData/Destination";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import Home from "./Components/Home/Home";
import Booking from "./Components/BookingRoom/Booking";
import NoPage from "./Components/NoPage/NoPage";
import firebaseConfig from "./Components/Login/firebaseConfig";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Hotel from "./Components/Hotel/Hotel";


export const DestinationContext = createContext();

firebase.initializeApp(firebaseConfig);

function App() {

  const destinationData = DestinationOfTravel;
  const [destination, setDestination] = useState(destinationData[0]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("user");


  return (
    <DestinationContext.Provider
    value={[
      destination,
      setDestination,
      loggedIn,
      setLoggedIn,
      name,
      setName,
   
    ]}>
    <Router>
     
    <Switch>
    <Route exact path="/">
            <Home />
          </Route>

          <Route path="/booking">
            <Booking />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/hotel">
            <Hotel />
          </PrivateRoute>

          <Route path="*">
            <NoPage />
          </Route>
     
    </Switch>
  </Router>
  

   
    
  </DestinationContext.Provider>
);
}


export default App;
