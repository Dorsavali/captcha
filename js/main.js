let captcha = document.querySelector("#captcha");
let refreshBtn = document.querySelector("#refresh");
let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let captchaInput = document.querySelector("#captchaInput");
let loginBtn = document.querySelector("#loginBtn");
let errorAlert = document.querySelector("#alert");
let captchaString =
  "abcdefghijklmnopqrstuvwzyxABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let generatedCaptcha = null;
function generatorCaptcha() {
  generatedCaptcha =
    captchaString[Math.floor(Math.random() * captchaString.length)] +
    captchaString[Math.floor(Math.random() * captchaString.length)] +
    captchaString[Math.floor(Math.random() * captchaString.length)] +
    captchaString[Math.floor(Math.random() * captchaString.length)];

  captcha.innerHTML = generatedCaptcha;
}

generatorCaptcha();

refreshBtn.addEventListener("click", function (e) {
  e.preventDefault();
  generatorCaptcha();
});

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const captchaUser = captchaInput.value;
  if (captchaUser === generatedCaptcha) {
    if (username === "dorsa" && password === "123456") {
      location.href = "https://www.digikala.com/";
    } else {
      generatorCaptcha();
      showError("wrong Username or Password");
      captchaInput.value = ``;
      usernameInput.value = ``;
      passwordInput.value = ``;
    }
  } else {
    generatorCaptcha();
    showError("wrong captcha");
    captchaInput.value = ``;
  }
});

function showError(message) {
  errorAlert.innerHTML = `<h1>${message}</h1>`;
  errorAlert.classList.add("active");
}
