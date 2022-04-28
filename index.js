// be able to change back to light mode

const changeToDarkMode = () => {
  const isDarkMode = document.body.classList.contains("dark-mode");
  const button = document.getElementById("dark-mode-toggle");

  if (isDarkMode === true) {
    document.body.classList.remove("dark-mode");
    button.innerText = "Dark Mode";
  } else {
    document.body.classList.add("dark-mode");
    button.innerText = "Light Mode";
  }
};

const validateForm = () => {
  console.log("im here");
  let character = document.forms["myForm"]["character"].value;
  let superpower = document.forms["myForm"]["superpower"].value;
  let location = document.forms["myForm"]["location"].value;

  const story = document.getElementById("story");
  story.innerText = `Once upon a time there was a ${character} who had a super power of ${superpower} and lived in ${location}`;
};
