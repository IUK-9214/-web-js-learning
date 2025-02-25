document.addEventListener("DOMContentLoaded", function () {
    const correctAnswers = ["Dehli", "islamabad", "Bijing", "moscow"];

    function checkAnswers() {
        let score = 0;
        let totalQuestions = correctAnswers.length;

        for (let i = 0; i < totalQuestions; i++) {
            let selectedOption = document.querySelector(`input[name="captai${i+2}"]:checked`); 
            if (selectedOption && selectedOption.value === correctAnswers[i]) {
                score++;
            }
        }
        
        alert(`Your score: ${score} out of ${totalQuestions}`);
    }

    let submitButton = document.getElementById("bu-sub");
    if (submitButton) {
        submitButton.addEventListener("click", checkAnswers);
    }
    console.log(score);
});
