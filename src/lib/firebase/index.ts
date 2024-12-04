import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import { getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: `${process.env.NEXT_API_KEY}`,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  projectId: process.env.NEXT_PROJECT_ID,
  storageBucket: process.env.NEXT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_APP_ID,
  measurementId: process.env.NEXT_MEASUREMENT_ID,
};

console.log(firebaseConfig);

// const firebaseConfig = {
//   apiKey: "AIzaSyC02SxvhB0XdzF65g4Wy5S_JnpahmWrN40",
//   authDomain: "dreamclubpro-mobile.firebaseapp.com",
//   projectId: "dreamclubpro-mobile",
//   storageBucket: "dreamclubpro-mobile.appspot.com",
//   messagingSenderId: "625014909844",
//   appId: "1:625014909844:web:8feea65b25920adba0fd81",
// };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = !getApps().length
  ? firebase.initializeApp(firebaseConfig)
  : getApp();

const auth = getAuth(app);

export { app, auth };

export const initFirebase = () => {
  return app;
};
