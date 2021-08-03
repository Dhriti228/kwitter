
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD-E1rT_YObDez-RPkDtRX6_uRUF5NC5v0",
      authDomain: "kwitter-30b4e.firebaseapp.com",
      databaseURL: "https://kwitter-30b4e-default-rtdb.firebaseio.com",
      projectId: "kwitter-30b4e",
      storageBucket: "kwitter-30b4e.appspot.com",
      messagingSenderId: "576571486530",
      appId: "1:576571486530:web:0b706d466c1e629f2218db"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name+ "!"
function addRoom()
{
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name",Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}
getData();
function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";
}