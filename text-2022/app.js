function validateForm() {
  let x = document.forms["form"]["How many hours of sleep do you get on average?"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

