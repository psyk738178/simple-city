function capitalizeFirstLetter(value) {
  value = value.trim();

  if (value.length === 0) {
    return value;
  }

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function validateContactForm(event) {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const city = document.getElementById("city");
  const zip = document.getElementById("zip");
  const email = document.getElementById("email");

  const zipPattern = /^\d{5}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  firstName.value = capitalizeFirstLetter(firstName.value);
  lastName.value = capitalizeFirstLetter(lastName.value);
  city.value = capitalizeFirstLetter(city.value);

  if (!zipPattern.test(zip.value)) {
    alert("Please enter a valid 5-digit ZIP code.");
    zip.focus();
    event.preventDefault();
    return false;
  }

  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    event.preventDefault();
    return false;
  }

  return true;
}

document.getElementById("contactForm").addEventListener("submit", validateContactForm);