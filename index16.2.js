const form = document.getElementById("registrationForm");
const submitButton = document.getElementById("submitButton");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const ageField = document.getElementById("age");
const professionField = document.getElementById("profession");
const passwordField = document.getElementById("password");
const agreementCheckbox = document.getElementById("agreement");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const professionError = document.getElementById("professionError");
const passwordError = document.getElementById("passwordError");
const agreementError = document.getElementById("agreementError");

nameField.addEventListener("blur", validateName);
emailField.addEventListener("blur", validateEmail);
ageField.addEventListener("blur", validateAge);
professionField.addEventListener("blur", validateProfession);
passwordField.addEventListener("blur", validatePassword);
agreementCheckbox.addEventListener("change", validateAgreement);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    validateName() &
    validateEmail() &
    validateAge() &
    validateProfession() &
    validatePassword() &
    validateAgreement()
  ) {
    console.log("Name:", nameField.value);
    console.log("Email:", emailField.value);
    console.log("Age:", ageField.value);
    console.log(
      "Gender:",
      document.querySelector('input[name="gender"]:checked').value
    );
    console.log("Profession:", professionField.value);
    console.log("Password:", passwordField.value);
    form.reset();
  }
});

function validateName() {
  const nameValue = nameField.value.trim();
  if (!nameValue.match(/^[A-Za-zА-Яа-яЁё\s]{2,20}$/)) {
    nameError.textContent =
      "Имя должно содержать только буквы и пробелы, от 2 до 20 символов";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailValue = emailField.value.trim();
  if (!emailValue.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    emailError.textContent = "Введите корректный email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validateAge() {
  const ageValue = ageField.value.trim();
  if (ageValue < 18 || ageValue > 100) {
    ageError.textContent = "Введите корректный возраст (от 18 до 100 лет)";
    return false;
  } else {
    ageError.textContent = "";
    return true;
  }
}

function validateProfession() {
  if (professionField.value === "") {
    professionError.textContent = "Выберите профессию";
    return false;
  } else {
    professionError.textContent = "";
    return true;
  }
}

function validatePassword() {
  const passwordValue = passwordField.value.trim();
  if (!passwordValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/)) {
    passwordError.textContent =
      "Пароль должен быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateAgreement() {
  if (!agreementCheckbox.checked) {
    agreementError.textContent = "Дайте согласие на обработку данных";
    return false;
  } else {
    agreementError.textContent = "";
    return true;
  }
}

function updateSubmitButton() {
  if (
    validateName() &
    validateEmail() &
    validateAge() &
    validateProfession() &
    validatePassword() &
    validateAgreement()
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

nameField.addEventListener("focus", () => (nameError.textContent = ""));
emailField.addEventListener("focus", () => (emailError.textContent = ""));
ageField.addEventListener("focus", () => (ageError.textContent = ""));
professionField.addEventListener(
  "focus",
  () => (professionError.textContent = "")
);
passwordField.addEventListener("focus", () => (passwordError.textContent = ""));
agreementCheckbox.addEventListener(
  "change",
  () => (agreementError.textContent = "")
);

form.addEventListener("input", updateSubmitButton);
