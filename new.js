window.onload = function() {
  alert("Welcome! Please fill out the Student Registration Form.");
};
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;
  const gender = document.querySelector("input[name='gender']:checked");
  const photo = document.getElementById("photo").value;
  
  if (fullname === "" || email === "" || course === "" || !gender || photo === "") {
    alert("⚠️ Please fill in all required fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  alert("✅ Registration successful! Thank you for registering, " + fullname + ".");
});
