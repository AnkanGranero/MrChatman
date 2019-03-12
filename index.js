import firebase from "./firebase";
import "firebase/database";
import "./MrChatman.scss"
import { postMessage } from "./Messages"

const data = firebase.database().ref("messages");


let usernamePrompt = prompt("write your username");
if (usernamePrompt == null) {
    usernamePrompt = "AnonymousUser"
}


document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();

    const message = document.getElementById("textField");


    postMessage(usernamePrompt, message.value)
})












data.on('child_changed', (snapshot) => {
    console.log("Someone wrote a message");
    console.log(snapshot.val());
});