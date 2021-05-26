
var firebaseConfig = {apiKey: "AIzaSyCO9jEP_PVzU-mQYbeIa0c12ehwT_AFKPY",
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
  
  if(name.match(/^[A-Za-z]+$/)){
  console.log("The name is valid");
  }
  else{
    alert("Name is invalid please enter only alphabets");
    return false;
  }
  
  if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
  console.log("valid email id entered\n");
  }
  else{
    alert("The email id is invalid, please try again");
    return false;
  }
  
  if(phone.match(/^\d{10}$/)){
  console.log("The phone number is valid");
  }
  else{
    alert("The phone number you have entered is invalid");
    return false;
  }
  if(address.match(/^[A-Za-z]+$/)){
  console.log("The address is valid");}
  else{
    alert("The address is invalid");
    return false;
  }
  console.log(name, email, phone, address);

  saveContactInfo(name, email, phone, address);

  document.querySelector(".request-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, phone, address) {
  // let newContactInfo = contactInfo.push();

  firebase.database().ref('request-data/' + phone).set({ 
    name: name,
    email: email,
    phone: phone,
    address: address
  });
}
