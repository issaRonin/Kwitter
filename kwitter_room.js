var firebaseConfig = {
  apiKey: "AIzaSyBTwO11l1krCFNMrVSmo5J3nroAaGsSC0w",
  authDomain: "kwitter-d80b2.firebaseapp.com",
  databaseURL: "https://kwitter-d80b2-default-rtdb.firebaseio.com",
  projectId: "kwitter-d80b2",
  storageBucket: "kwitter-d80b2.appspot.com",
  messagingSenderId: "95152027287",
  appId: "1:95152027287:web:90b5d4303a282ff2171bd2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome -" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    //End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name)
  .update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";

}
function redirectToRoomName()
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logOut()
{
  localStorage.removeItem(user_name);
  localStorage.removeItem(room_name);
  window.location = "index.html";
}

