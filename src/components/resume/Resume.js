import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';
import './resume.css';
import ScoreTable from '../scoreTable/ScoreTable.js';

function Resume() {

  const { score, storedName, setScore, quizzgameType } = useContext(GlobalContext);

  const handleReset = () => {
    // Redefinir os scores
    setScore({
      historyScore: 0,
      scienceScore: 0,
      artScore: 0,
      moviesScore: 0,
      musicScore: 0,
      gamesScore: 0,
    });
    // Limpar o localStorage
    localStorage.clear();
  };
 
  return (
    <section className="resume__container">
      <h1>Sua pontuaçao final, {storedName}</h1>
      {quizzgameType === 'default' ? (
        <ScoreTable
        categories={[
          { name: 'Arte', score: score.artScore },
          { name: 'Ciência', score: score.scienceScore },
          { name: 'História', score: score.historyScore },
        ]}
      />
      ) : (
        <ScoreTable
        categories={[
          { name: 'Cinema', score: score.moviesScore },
          { name: 'Jogos', score: score.gamesScore },
          { name: 'Música', score: score.musicScore },
        ]}
      />
    )}

      <div className="buttons-container">
        <Link to="/" onClick={handleReset} className="button home-button">
          Ir para a tela inicial
        </Link>
        <Link
          to="/perguntas"
          onClick={handleReset}
          className="button retry-button"
        >
          Tentar novamente
        </Link>
      </div>
    </section>
  );
}

export default Resume;
