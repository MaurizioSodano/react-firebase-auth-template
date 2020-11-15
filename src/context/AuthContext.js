import createDataContext from "./createDataContext";
import firebase from "../firebase/firebase";

//Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_user":
      return { errorMessage: "", user: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "add_error_message":
      return { ...state, errorMessage: action.payload };
    case "logout":
      return { user: null, errorMessage: "" };
    default:
      return state;
  }
};

//Helping functions
const login = (dispatch) => async (email, password) => {
  try {
    console.log("Login");
    await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch({ type: "clear_error_message" });
  } catch (e) {
    console.log(e);
    dispatch({ type: "add_error_message", payload: "login error" });
  }
};
const register = (dispatch) => async (email, password) => {
  try {
    console.log("Register");
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    dispatch({ type: "clear_error_message" });
  } catch (e) {
    console.log(e);
    dispatch({ type: "add_error_message", payload: "registration error" });
  }
};

const logout = (dispatch) => async () => {
  try {
    console.log("Logout");
    await firebase.auth().signOut();
  } catch (e) {
    console.error(e);
    dispatch({ type: "add_error_message", payload: "logout error" });
  }
  dispatch({ type: "logout" });
};

const setUser = (dispatch) => (newUser) => {
  dispatch({ type: "add_user", payload: newUser });
};

//Export
export const { Provider, Context } = createDataContext(
  authReducer, //reducer
  { login, register, logout, setUser }, //export helping function
  { user: null, errorMessage: "" } //initial state
);
