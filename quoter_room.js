
var firebaseConfig = {
      apiKey: "AIzaSyDpWLGSC7829uCmR7TUUY_H9o3QpWzp-rk",
      authDomain: "quoter-61068.firebaseapp.com",
      databaseURL: "https://quoter-61068-default-rtdb.firebaseio.com",
      projectId: "quoter-61068",
      storageBucket: "quoter-61068.appspot.com",
      messagingSenderId: "60111738547",
      appId: "1:60111738547:web:8f69c4003613cd365f42c6"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
