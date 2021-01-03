import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEelRqlLBE_wFmnZ8O7q9jDlLjmvTMNQw",
    authDomain: "fir-app-6ac9e.firebaseapp.com",
    databaseURL: "https://fir-app-6ac9e.firebaseio.com",
    projectId: "fir-app-6ac9e",
    storageBucket: "fir-app-6ac9e.appspot.com",
    messagingSenderId: "749312866914",
    appId: "1:749312866914:web:540ffc8729ed3a57edaf3b"
  });

  const db = firebaseApp.firestore();

  export {db,firebase}


