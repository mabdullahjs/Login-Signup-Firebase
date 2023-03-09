import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, set, ref, onValue } from "firebase/database";

// initializing app
import app from "./fireabaseConfig";

// get Auth
const auth = getAuth(app);
const db = getDatabase(app);

// register user
let signUpUser = (obj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        obj.id = res.user.uid;
        const reference = ref(db, `users/${obj.id}`);
        set(reference, obj)
          .then(() => {
            resolve("Data Send Successfully in Database and User Created");
          })
          .catch((err) => {
            reject(err.message);
          });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

//login user
let loginUser = (obj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        const reference = ref(db, `users/${res.user.uid}`);
        onValue(reference, (data) => {
          if (data.exists()) {
            resolve(data.val());
          } else {
            reject("Data Not Found :(");
          }
        });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

export {loginUser , signUpUser}