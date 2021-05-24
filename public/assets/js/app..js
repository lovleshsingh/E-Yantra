
const firebaseConfig = {apiKey: "AIzaSyCO9jEP_PVzU-mQYbeIa0c12ehwT_AFKPY",
                        authDomain: "e-yantra-d85a8.firebaseapp.com",
                        projectId: "e-yantra-d85a8",
                        storageBucket: "e-yantra-d85a8.appspot.com",
                        messagingSenderId: "213352896831",
                        appId: "1:213352896831:web:258889278a357803bc5b8a",
                        measurementId: "G-SYS4V4V6PN"};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".request-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone").value;
  let address = document.querySelector(".address").value;
  console.log(name, email, phone, address);

  saveContactInfo(name, email, phone, address);

  document.querySelector(".request-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, phone, address) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email:email,
    phone: phone,
    address : address
  });
}
