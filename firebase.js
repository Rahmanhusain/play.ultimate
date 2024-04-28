import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getDatabase, ref, child, get , set} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

 
function signupform(event){
    
event.preventDefault();
const signupForm = document.getElementById('signup-form');

// Get input field values
const email = signupForm.querySelector('#email').value;
const name = signupForm.querySelector('#name').value;
const phone = signupForm.querySelector('#phone').value;
const hobby = signupForm.querySelector('#hobby').value;
const password = signupForm.querySelector('#password').value;
const passwordcon = signupForm.querySelector('#confirm-password').value;
if (password !== passwordcon) {
    window.alert("Passwords do not match!");
    signupForm.querySelector('#password').value = ''; // Clear the password fields
    signupForm.querySelector('#confirm-password').value = '';
    return; // Return from the function if passwords don't match
}
const firebaseConfig = {
    apiKey: "AIzaSyC4M83aQzr5sRmeHka8o0qM3fmuyF7Q0Dc",
    authDomain: "play-ultimate.firebaseapp.com",
    databaseURL: "https://play-ultimate-default-rtdb.firebaseio.com",
    projectId: "play-ultimate",
    storageBucket: "play-ultimate.appspot.com",
    messagingSenderId: "752307106882",
    appId: "1:752307106882:web:2de01861e1c0bd63a3a9db",
    measurementId: "G-L2GX82PKW1"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase(app);
    
    // Reference to the location where you want to store the data
    const dataRef = ref(database, name);
    
    
    // Reference to the location where you want to store the data
    // Example data to store
    const newData = {
    email: email,
    name: name,
    phone: phone,
    hobby: hobby,
    password: password
    };
    
    // Store the data in the database
    set(dataRef, newData)
    .then(() => {
    console.log('Data stored successfully!');
    window.alert("Data stored successfully! ")
    })
    .catch((error) => {
    console.error('Error storing data: ', error);
    window.alert("Error storing data: ")
    });
    document.getElementById("signup-form").reset();
}
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', signupform);
    
    
function loaddata(){
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    const rowCount = table.rows.length;
    
    // Start from the second row (index 1) and remove each row until there are no rows left
    for (let i = rowCount - 1; i >= 0; i--) {
        table.deleteRow(i);
    }
    var sno=table.rows.length;
   
    var firebaseConfig = {
        apiKey: "AIzaSyC4M83aQzr5sRmeHka8o0qM3fmuyF7Q0Dc",
        authDomain: "play-ultimate.firebaseapp.com",
        databaseURL: "https://play-ultimate-default-rtdb.firebaseio.com",
        projectId: "play-ultimate",
        storageBucket: "play-ultimate.appspot.com",
        messagingSenderId: "752307106882",
        appId: "1:752307106882:web:2de01861e1c0bd63a3a9db",
        measurementId: "G-L2GX82PKW1"
      };
      const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the Firebase database service
const database = getDatabase(firebaseApp);

// Reference the "root" node
const rootRef = ref(database, '/');

// Retrieve email and name for each child node
get(rootRef).then((snapshot) => {
  if (snapshot.exists()) {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      // Retrieve email and name from each node
      const email = childData.email;
        const name = childData.name;
        const phone = childData.phone;
        sno+=1;
        // Create a new row for each node
        const newRow = document.createElement('tr');

        // Insert data into cells of the new row
        newRow.insertCell(0).innerHTML = sno; // Assuming you want to display the node key
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = email;
        newRow.insertCell(3).innerHTML = phone;

        // Append the new row to the table
        document.getElementById('tablebody').appendChild(newRow);
    });
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  // Handle errors
  console.error("Error retrieving data:", error);
});

}



    
//Login check

function Loginform(event){
    event.preventDefault();
    const signupForm = document.getElementById('login-form');
    var isvalid=false;
    // Get input field values
    const email = signupForm.querySelector('#lemail').value;
    const password = signupForm.querySelector('#lpassword').value;
    
    var firebaseConfig = {
        apiKey: "AIzaSyC4M83aQzr5sRmeHka8o0qM3fmuyF7Q0Dc",
        authDomain: "play-ultimate.firebaseapp.com",
        databaseURL: "https://play-ultimate-default-rtdb.firebaseio.com",
        projectId: "play-ultimate",
        storageBucket: "play-ultimate.appspot.com",
        messagingSenderId: "752307106882",
        appId: "1:752307106882:web:2de01861e1c0bd63a3a9db",
        measurementId: "G-L2GX82PKW1"
      };
      const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the Firebase database service
const database = getDatabase(firebaseApp);

// Reference the "root" node
const rootRef = ref(database, '/');

// Retrieve email and name for each child node
get(rootRef).then((snapshot) => {
  if (snapshot.exists()) {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      // Retrieve email and name from each node
      if (email===childData.email && password===childData.password) {
       
        isvalid=true;
        return;
      }
      
     
    });
    if (isvalid) {
        console.log(email + "and" + password);
        document.getElementById('Login').classList.add('hide');
        document.getElementById('tablediv').classList.remove('hide');
        loaddata();
    }else{
        window.alert("wrong credentials try again!")
    }
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  // Handle errors
  console.error("Error retrieving data:", error);
});

        document.getElementById("login-form").reset();
    }
        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', Loginform);