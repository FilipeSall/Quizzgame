import React, { useContext, useEffect, useRef, useState } from 'react';
import './questionpage.css';
import { GlobalContext } from '../../GlobalContext.js';
import ScoreDisplay from '../scoreDisplay/ScoreDisplay';
import NextBtn from '../../assets/images/next.svg';
import questionsList from './ListQuestions.js';
import { Link, useNavigate } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";

function QuestionPage() {

  // Referência para o botão de resposta
  const btnClicked = useRef(null);

  // Hook de navegação
  const navigate = useNavigate();

  // Contexto global de pontuação e nome armazenado
  const { setScore, storedName, setStoredName } = useContext(GlobalContext);

  // Index da pergunta atual e estado de resposta
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);

  // Index da opção clicada e array embaralhado de perguntas
  const [clickedOptionIndex, setClickedOptionIndex] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [shuffledQuestionsList, setShuffledQuestionsList] = useState([]);

  useEffect(() => {
    const shuffledList = questionsList.sort(() => Math.random() - 0.5);
    setShuffledQuestionsList(shuffledList);
  }, []);

  // Embaralha as perguntas quando o componente é montado
  useEffect(() => {
    const historyQuestions = shuffledQuestionsList.filter(
      (question) => question.category === "history"
    ).slice(0, 10);
    const scienceQuestions = shuffledQuestionsList.filter(
      (question) => question.category === "science"
    ).slice(0, 10);
    const artQuestions = shuffledQuestionsList.filter(
      (question) => question.category === "art"
    ).slice(0, 10);
    const shuffled = historyQuestions
      .concat(scienceQuestions)
      .concat(artQuestions)
      .sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, [shuffledQuestionsList]);

  // Lida com o clique do usuário em uma resposta
  const handleClick = (isCorrect, index) => {
    if (!answered) {
      setAnswered(true);
      setClickedOptionIndex(index);

      // Se a resposta estiver correta, atualiza a pontuação
      if (isCorrect) {
        setScore((prevScore) => {
          const updatedScore = { ...prevScore };

          switch (currentQuestion.category) {
            case 'history':
              updatedScore.historyScore += 1;
              break;
            case 'science':
              updatedScore.scienceScore += 1;
              break;
            case 'art':
              updatedScore.artScore += 1;
              break;
            default:
              break;
          }

          return updatedScore;

        });
      }
    };

    // Se for a última pergunta, redireciona para a tela de resumo
    if (questionIndex === shuffledQuestions.length - 1) {
      navigate('/resumo');
    }
  };

  // Retorna as classes para o botão de resposta baseado no estado de resposta
  const getButtonClasses = (index, option) => {
    let classes = 'awnser-btn';

    if (answered && clickedOptionIndex === index) {
      classes += option.isCorrect ? ' correct correctAnime' : ' incorrect incorrectAnime';
    }
    return classes;
  };

  // Seleciona a pergunta atual a partir do array embaralhado ou não
  const currentQuestion = shuffledQuestions.length > 0 ? shuffledQuestions[questionIndex] : questionsList[questionIndex];

  // Lida com o logout e redireciona para a tela de login
  const handleLogout = () => {
    setScore({ historyScore: 0, scienceScore: 0, artScore: 0 });
    localStorage.clear();
    setStoredName("");
    navigate("/");
  };

  return (
    <main className='question__container'>
      <header className='header'>
        <h1>Ola, {storedName}</h1>
        <div className='score__container'></div>
        <ScoreDisplay />
      </header>

      <div className='question-wrapper'>
        <div className='question-card'>
          <h1>{currentQuestion.question}</h1>
          <div className={`button-wrapper`}>
            {currentQuestion.options.map((option, j) => (
              <button
                key={j}
                ref={btnClicked}
                className={`${getButtonClasses(j, option)} ${answered ? (option.isCorrect ? 'correct' : 'incorrect') : ''} `}
                onClick={() => handleClick(option.isCorrect, j)}
                disabled={answered}>
                {answered && clickedOptionIndex === j && (
                  <span className={`icon-container ${option.isCorrect ? 'correct-icon' : 'incorrect-icon'}`}>
                    {option.isCorrect ? '✓' : '✗'}
                  </span>
                )}
                {option.answer}
              </button>
            ))}
          </div>
          {answered &&
            questionIndex < questionsList.length - 1 && (
              <button
                onClick={() => {
                  setQuestionIndex(questionIndex + 1);
                  setAnswered(false);
                }}
                className="nextQuestion__btn"
              >
                <img className="nextQuestion__btn-img" src={NextBtn} alt="proxima pergunta" />
              </button>
            )}
        </div>
        <Link to='/' onClick={handleLogout} className='log-out__btn'><BiLogIn size={40} /></Link>
      </div>
    </main>
  );
}

export default QuestionPage