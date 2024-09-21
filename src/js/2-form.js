const formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");
form.addEventListener("input", onSaveData);
function onSaveData (event) {
  console.log(event.currentTarget.elements)
  const email = event.currentTarget.elements.email.value.trim();
  const message = event.currentTarget.elements.message.value.trim();
  formData.email = email;
  formData.message = message;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};


