//Adicione os links de configurações de seu App Firebase

const firebaseConfig = {
  apiKey: "AIzaSyB7Tezv4wb6vfcE_zOukp94be50VtnbdXU",
  authDomain: "kitty-kwitter-so-pretty.firebaseapp.com",
  databaseURL: "https://kitty-kwitter-so-pretty-default-rtdb.firebaseio.com",
  projectId: "kitty-kwitter-so-pretty",
  storageBucket: "kitty-kwitter-so-pretty.appspot.com",
  messagingSenderId: "635954228232",
  appId: "1:635954228232:web:674c81595780cbe3c8f5bd",
  measurementId: "G-JFE6G1MGVB"
};

    // Inicializar Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adicionando nome da sala"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Nome da Sala - " + Room_names);
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
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    