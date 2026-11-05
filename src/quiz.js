class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. getQuestion()

  // 3. moveToNextQuestion()

  // 4. shuffleQuestions()

  // 5. checkAnswer(answer)

  // 6. hasEnded()

  /**
   * Modifies the questions array property to contain only the questions filtered with the specified difficulty (from 1 to 3)
   * @param {number} difficulty - a number between 1 and 3
   */
  filterQuestionsByDifficulty(difficulty) {
    //only if numbers && from 1 to 3
    if (typeof difficulty === "number" && difficulty >= 1 && difficulty <= 3) {
      //updating questions array
      this.questions = this.questions.filter(
        (q) => q.difficulty === difficulty,
      );
    }
  }

  /**
   * q - element of the array
   * q.difficulty - diffictulty of particular element
   * @returns the average difficulty (number) of the questions in the quiz
   */

  averageDifficulty() {
    return (
      this.questions.reduce((total, q) => total + q.difficulty, 0) /
      this.questions.length
    );
  }
}
