function shuffleQuestions(questions, categories, numQuestions) {
    const shuffledList = questions.sort(() => Math.random() - 0.5);
    const shuffledQuestions = categories.reduce((acc, category) => {
      const filteredQuestions = shuffledList.filter(
        (question) => question.category === category
      ).slice(0, numQuestions);
      return acc.concat(filteredQuestions);
    }, []);
    return shuffledQuestions.sort(() => Math.random() - 0.5);
  }
  

  export default shuffleQuestions;