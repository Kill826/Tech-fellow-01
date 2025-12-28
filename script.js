// STORED USER DATA
let savedName = "";
let savedEmail = "";
let savedPassword = "";

// SHOW / HIDE SECTIONS
function showLogin(){
    signupSection.style.display = "none";
    loginSection.style.display = "block";
}
function showSignup(){
    loginSection.style.display = "none";
    signupSection.style.display = "block";
}

// SIGNUP
signupForm.addEventListener("submit", e => {
    e.preventDefault();
    if(suName.value === "" || suEmail.value === "" || suPassword.value.length < 6){
        signupMsg.textContent = "Fill all fields (password ≥ 6)";
        signupMsg.className = "error";
        return;
    }

    savedName = suName.value;
    savedEmail = suEmail.value;
    savedPassword = suPassword.value;

    signupMsg.textContent = "Signup successful! Please login.";
    signupMsg.className = "success";

    showLogin();
});

// LOGIN
loginForm.addEventListener("submit", e => {
    e.preventDefault();

    if(liEmail.value === savedEmail && liPassword.value === savedPassword){
        loginSection.style.display = "none";
        homeSection.style.display = "block";

        userName.textContent = savedName;
        profileName.textContent = savedName;
        profileEmail.textContent = savedEmail;

        showHome();
    } else {
        loginMsg.textContent = "Invalid credentials";
        loginMsg.className = "error";
    }
});

// NAVIGATION
function showHome(){
    homePage.style.display = "block";
    contactPage.style.display = "none";
    profilePage.style.display = "none";
}
function showContact(){
    homePage.style.display = "none";
    contactPage.style.display = "block";
    profilePage.style.display = "none";
}
function showProfile(){
    homePage.style.display = "none";
    contactPage.style.display = "none";
    profilePage.style.display = "block";
}

// CONTACT FORM (UPDATED WITH NAME VALIDATION)
contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const nameValue = cName.value.trim();
    const emailValue = cEmail.value.trim();
    const messageValue = cMessage.value.trim();

    const nameCheck = /^[A-Za-z\s]+$/;  // Only letters & spaces allowed

    if(nameValue === "" || emailValue === "" || messageValue === ""){
        contactMsg.textContent = "All fields are required!";
        contactMsg.className = "error";
        return;
    }

    if(!nameCheck.test(nameValue)){
        contactMsg.textContent = "Enter a valid name (letters only)";
        contactMsg.className = "error";
        return;
    }

    contactMsg.textContent = "Message sent successfully ✔️";
    contactMsg.className = "success";

    // Optional: Clear fields after submit
    cName.value = "";
    cEmail.value = "";
    cMessage.value = "";
});

// LOGOUT
function logout(){
    homeSection.style.display = "none";
    showLogin();
}
