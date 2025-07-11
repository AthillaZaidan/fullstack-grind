const pass = document.getElementById(password);
const confirmPass = document.getElementById(confirmPassword);

if (password.value !== confirm.value) {
  password.parentElement.classList.add("error");
  confirm.parentElement.classList.add("error");
}