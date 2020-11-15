import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "../firebase/firebase";

import { Context as AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";
import LoginFlow from "./LoginFlowStack";
//import MainFlow from "./MainFlowBottomBar";
import Test from "../screens/Test";


export default function Routes() {
  const {
    state: { user },
    setUser,logout,
  } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(newUser) {
    setUser(newUser);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <Test message="Logged" buttonText="Logout" callback={logout}/> : <LoginFlow/>}
    </NavigationContainer>
  );
}
