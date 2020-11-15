import * as firebase from "firebase";

import firebaseConfig from "./firebaseConfig";

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('App reloaded, so firebase did not re-initialize');
}
export default firebase;
