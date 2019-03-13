import firebase from "firebase/app";




var config = {
    apiKey: "AIzaSyArU8cNt1fjZykEGN3Zs4pWxs11so7sA2I",
    authDomain: "mrchatman-51b04.firebaseapp.com",
    databaseURL: "https://mrchatman-51b04.firebaseio.com",
    projectId: "mrchatman-51b04",
    storageBucket: "mrchatman-51b04.appspot.com",
    messagingSenderId: "648933994123"
};


// apiKey: "AIzaSyDoB1u4OHtsT9te8pN0dTk0cM68SFS6NQk",
// authDomain: "customers-c4cf2.firebaseapp.com",
// databaseURL: "https://customers-c4cf2.firebaseio.com",
// projectId: "customers-c4cf2",
// storageBucket: "",
// messagingSenderId: "793398235205"

firebase.initializeApp(config);
export default firebase; 
