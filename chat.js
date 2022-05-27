var  firebaseConfig = {
    apiKey: "AIzaSyCiZwnLcHSXvl9PP-JbyVUbKoTvABVKnhE",
    authDomain: "project-100-19335.firebaseapp.com",
    databaseURL: "https://project-100-19335-default-rtdb.firebaseio.com",
    projectId: "project-100-19335",
    storageBucket: "project-100-19335.appspot.com",
    messagingSenderId: "1055067682473",
    appId: "1:1055067682473:web:67460c3ebb959a33c25bb8",
    measurementId: "G-T97ZJCW2KK"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



