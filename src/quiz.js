class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. getQuestion()
  getQuestion() 
  {
      return this.questions[this.currentQuestionIndex];
  }
  // 3. moveToNextQuestion()
  moveToNextQuestion() 
  {
      this.currentQuestionIndex = this.currentQuestionIndex + 1;
  }
  // 4. shuffleQuestions()
  shuffleQuestions() 
  {
      for (let i = 0; i < this.questions.length; i++) 
        {
          const randomIndex = Math.floor(Math.random() * this.questions.length);
          const temp = this.questions[i];
          this.questions[i] = this.questions[randomIndex];
          this.questions[randomIndex] = temp;
        }
  }
  // 5. checkAnswer(answer)
checkAnswer(answer) {
  if (answer === this.questions[this.currentQuestionIndex].answer) {
    this.correctAnswers += 1;
  }
}
  // 6. hasEnded()
hasEnded () {
  if (this.currentQuestionIndex < this.questions.length){
    return false
  }
  else if (this.currentQuestionIndex === this.questions.length){
    return true
  }
}

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
