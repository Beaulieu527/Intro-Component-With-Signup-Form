let inputFirstName = document.querySelector("#first_name");
let inputLastName = document.querySelector("#last_name");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");

let form = document.querySelector("form");

const invalidEmail = email => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !mailformat.test(email);
};

const isEmpty = text => {
  return text == "";
};

const toggleError = component => {
  let id = component.id;
  let label = document.querySelector(`label[for=${id}]`);

  component.classList.toggle("error-border");
  label.classList.toggle("hidden");
};

const handleError = (component, validate) => {
  if (validate(component.value)) {
    if (!component.classList.contains("error-border")) {
      toggleError(component);
    }
  } else {
    if (component.classList.contains("error-border")) {
      toggleError(component);
    }
  }
};

const validate = () => {
  handleError(inputFirstName, isEmpty);
  handleError(inputLastName, isEmpty);
  handleError(inputEmail, invalidEmail);
  handleError(inputPassword, isEmpty);
};

const handleSubmit = event => {
  event.preventDefault();
  validate();
};

form.onsubmit = handleSubmit;
