const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

const loginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const name = loginInput.value;
  localStorage.setItem(USERNAME_KEY, name);
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${name}`;
};

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginSubmit);
} else {
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${savedName}`;
}
