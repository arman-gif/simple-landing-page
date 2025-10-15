
function showMessage() {
  alert("Welcome to GreenLand Gardens! Let's grow together 🌱");
}

function toggleFAQ(index) {
  const answers = document.querySelectorAll(".faq-answer");
  answers[index].style.display =
    answers[index].style.display === "block" ? "none" : "block";
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your message has been received.`);
}


