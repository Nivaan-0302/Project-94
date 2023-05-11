var firebaseConfig = {
    apiKey: "AIzaSyDTiiV_lWv3EcUTuLmvt_Atjz1M1NkIfn0",
    authDomain: "project-c94-a42e3.firebaseapp.com",
    databaseURL: "https://project-c94-a42e3-default-rtdb.firebaseio.com",
    projectId: "project-c94-a42e3",
    storageBucket: "project-c94-a42e3.appspot.com",
    messagingSenderId: "397168280704",
    appId: "1:397168280704:web:08a846c2d091cf33945265",
    measurementId: "G-LE26S13NNY"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

  function addRoom() {
    room_name = document.getElementById("room").value;

    localStorage.setItem("roomname", room_name);

    window.location = "Kwitter_room.html";

    firebase.database().rel("/").child(room_name).update({
        purpose: "Adding Room Name"
    });
  }

