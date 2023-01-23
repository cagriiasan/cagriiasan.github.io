const firebaseConfig = {
    apiKey: "AIzaSyCylCKmGvH98gZwB-hlZ8bS_1Bg7mCQlGw",
    authDomain: "cagriientertainment.firebaseapp.com",
    projectId: "cagriientertainment",
    storageBucket: "cagriientertainment.appspot.com",
    messagingSenderId: "1060111864950",
    appId: "1:1060111864950:web:8569f2b461c2b1829a3b57",
    measurementId: "G-9P1XLKY5Y4"
};

const app = initializeApp(firebaseConfig);
const auth = firebase.auht();
const database = firebase.database();

var Emaildid = document.getElementById(Emaildid).value;
var Pass = document.getElementById(Pass).value;

function login() {
    signInWithEmailAndPassword(Emaildid, Pass)
        .then(() => {
            // Signed in 
            var user = auth.currentUser;
            var uid = user.uid;
            console.log(uid);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert("daqfa" + errorMessage);
        });
}