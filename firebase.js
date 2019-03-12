import firebase from "firebase/app";

var config = {
    apiKey: "AIzaSyDh8sWDa8mAXM58tAuDlWptTaWUmGkvFwc",
    authDomain: "andreasproject-886d1.firebaseapp.com",
    databaseURL: "https://andreasproject-886d1.firebaseio.com",
    projectId: "andreasproject-886d1",
    storageBucket: "andreasproject-886d1.appspot.com",
    messagingSenderId: "987426855419"
    // apiKey: "AIzaSyDoB1u4OHtsT9te8pN0dTk0cM68SFS6NQk",
    // authDomain: "customers-c4cf2.firebaseapp.com",
    // databaseURL: "https://customers-c4cf2.firebaseio.com",
    // projectId: "customers-c4cf2",
    // storageBucket: "",
    // messagingSenderId: "793398235205"
};
firebase.initializeApp(config);
export default firebase; 
