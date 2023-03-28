import  firebase from "firebase"

const firebaseConfig = {
        apiKey: "AIzaSyBzj-U2XlY0MUe_CjGFJrof9j-4knwi57M",
        authDomain: "tasks-fcc49.firebaseapp.com",
        projectId: "tasks-fcc49",
        storageBucket: "tasks-fcc49.appspot.com",
        messagingSenderId: "899498585912",
        appId: "1:899498585912:web:bf8b2e3d14adabdd7edbcd"

};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database