const firebaseConfig = {
  apiKey: "AIzaSyCCjiJitmZJcsAudhWw-5MVICC8TuoE6rk",
  authDomain: "classtest-c53fd.firebaseapp.com",
  databaseURL: "https://classtest-c53fd-default-rtdb.firebaseio.com",
  projectId: "classtest-c53fd",
  storageBucket: "classtest-c53fd.appspot.com",
  messagingSenderId: "763586860231",
  appId: "1:763586860231:web:5ff4da985c2e86e7b19ae2",
  measurementId: "G-CJHB15S633"
};
   
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  room_name=localStorage.getItem(room_name);
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "sender_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  }
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "sender_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }