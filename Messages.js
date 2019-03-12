import firebase from "./firebase";
import "firebase/database"

const data = firebase.database().ref().child("messages");
const visadata = document.getElementById("visadata");
const textField = document.getElementById("textField");


export function postMessage(username, message) {
    textField.value = "";
    let date = new Date();

    data.child(username).push({

        "message": message,
        "date": date

    })

    visadata.innerHTML += `<li>${message}  written by ${username}</li>`;
}
