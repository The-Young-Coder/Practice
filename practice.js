
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZAM3MsuQgEThFEouyp_P_ex3047ltMCM",
    authDomain: "practice-56752.firebaseapp.com",
    databaseURL: "https://practice-56752-default-rtdb.firebaseio.com",
    projectId: "practice-56752",
    storageBucket: "practice-56752.appspot.com",
    messagingSenderId: "892376907790",
    appId: "1:892376907790:web:ad8fd8ff8825b327097c5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){

user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}
