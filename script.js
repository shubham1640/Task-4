let questionCount = 1;

function addQuestion() {
    questionCount++;

    const questionsContainer = document.getElementById('questionsContainer');

    const newQuestionDiv = document.createElement('div');
    newQuestionDiv.className = 'question';

    newQuestionDiv.innerHTML = `
        <label for="question${questionCount}">Question ${questionCount}:</label>
        <input type="text" id="question${questionCount}" class="questionInput" required>

        <label for="answer${questionCount}">Answer ${questionCount}:</label>
        <input type="text" id="answer${questionCount}" class="answerInput" required>
        <input type="radio" name="correctAnswer${questionCount}" value="${questionCount}"> Correct Answer
    `;

    questionsContainer.appendChild(newQuestionDiv);
}

document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Handle form submission (e.g., save quiz data, show success message)
    alert('Quiz created successfully!');
    location.href = 'index.html';
});
