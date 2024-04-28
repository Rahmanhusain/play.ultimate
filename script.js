function addRow() {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var sno=table.rows.length;
    var regno=20250+(table.rows.length);
    newRow.insertCell(0).innerHTML = sno;
    newRow.insertCell(1).innerHTML = regno;
    newRow.insertCell(2).innerHTML = "Rahman Husain";

  }
  function logout(){
    document.getElementById('tablediv').classList.add('hide');
    document.getElementById('Login').classList.remove('hide');
  }
  function change(event){
    event.preventDefault(); // Prevent default form submission behavior

        var loginForm = document.getElementById("login-form");
        var signupForm = document.getElementById("signup-form");
        var toggleLink = document.getElementById("toggleLink");
        var logsignLink = document.getElementById("logsignlink");

        if (loginForm.classList.contains("hide")) {
            // Show login form, hide sign-up form
            loginForm.classList.remove("hide");
            signupForm.classList.add("hide");
            toggleLink.innerText = "Sign Up";
            logsignLink.innerHTML = "Don't have an account? <a href='#' id='toggleLink' onclick='change(event)'>Sign Up</a>";
        } else {
            // Show sign-up form, hide login form
            loginForm.classList.add("hide");
            signupForm.classList.remove("hide");
            toggleLink.innerText = "Login";
            logsignLink.innerHTML = "Already have an account? <a href='#' id='toggleLink' onclick='change(event)'>Login</a>";
        }
        //db test
        
  }
//login eye
const togglePassword = document.getElementById('logineye');
const passwordInput = document.getElementById('lpassword');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    // Change eye icon class source
    if (type === 'password') {
        togglePassword.className = 'eye-icon fas fa-eye';
    } else {
        togglePassword.className = 'eye-icon fas fa-eye-slash';
    }
});
//logi eye end

//signup eye normal
const togglePasswordsignnormal = document.getElementById('signupeye');
const passwordInputsignnormal = document.getElementById('password');

togglePasswordsignnormal.addEventListener('click', function () {
    const type = passwordInputsignnormal.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInputsignnormal.setAttribute('type', type);
    // Change eye icon class source
    if (type === 'password') {
        togglePasswordsignnormal.className = 'eye-icon fas fa-eye';
    } else {
        togglePasswordsignnormal.className = 'eye-icon fas fa-eye-slash';
    }
});
//signup eye normalend

//signup eye confirm
const togglePasswordsignconfirm = document.getElementById('signupeyeconfirm');
const passwordInputsignconfirm = document.getElementById('confirm-password');

togglePasswordsignconfirm.addEventListener('click', function () {
    const type = passwordInputsignconfirm.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInputsignconfirm.setAttribute('type', type);
    // Change eye icon class source
    if (type === 'password') {
        togglePasswordsignconfirm.className = 'eye-icon fas fa-eye';
    } else {
        togglePasswordsignconfirm.className = 'eye-icon fas fa-eye-slash';
    }
});
//signup eye confirm end
//vaidate signup
  // Event listener to check password match on input change