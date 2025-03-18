function checkAnswer(button) {
    const quizDiv = button.parentElement;
    const correctAnswer = quizDiv.getAttribute("data-answer"); // Get correct answer
    const selectedAnswer = button.textContent.trim(); // Get selected answer
    const resultP = quizDiv.querySelector(".result");

    if (selectedAnswer === correctAnswer) {
        resultP.innerHTML = "✅ Correct!";
        resultP.style.color = "green";
        resultP.style.paddingTop = "10px";
    } else {
        resultP.innerHTML = "❌ Incorrect. Try again.";
        resultP.style.color = "red";
        resultP.style.paddingTop = "10px";
    }
}