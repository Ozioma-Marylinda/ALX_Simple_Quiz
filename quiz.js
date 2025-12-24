const feedback = document.getElementById("feedback");
const buttonAns = document.getElementById("submit-answer");

// checks if the user’s selected answer is correct and displays appropriate feedback.
function checkAnswer() {
  const correctAnswer = "4";

  const quiz = document.querySelector('input[name="quiz"]:checked');
  const userAnswer = quiz.value;

  if (userAnswer === correctAnswer) {
  feedback.textContent = "Correct! Well done.";
}

if (userAnswer !== correctAnswer) {
  feedback.textContent = "That's incorrect. Try again!";
}

}

buttonAns.addEventListener("click", checkAnswer);