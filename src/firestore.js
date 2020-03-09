import firebase from "firebase";

        
var firebaseConfig = {
        apiKey: "AIzaSyBr_M-oyAZ0tYIH4DLhrP5z3dYlYwfyTpk",
        authDomain: "editorjs-b9d4c.firebaseapp.com",
        databaseURL: "https://editorjs-b9d4c.firebaseio.com",
        projectId: "editorjs-b9d4c",
        storageBucket: "editorjs-b9d4c.appspot.com",
        messagingSenderId: "1073078608025",
        appId: "1:1073078608025:web:af1e012ac35452df8e9808",
        measurementId: "G-ZKJDP3NKM5"
};
    
firebase.initializeApp(firebaseConfig);
firebase.firestore();