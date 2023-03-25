import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';
import './resume.css';

function Resume() {

    const { score, storedName, setScore } = useContext(GlobalContext);

    const handleReset = () => {
        // Redefinir os scores
        setScore({
            historyScore: 0,
            scienceScore: 0,
            artScore: 0,
        });
        // Limpar o localStorage
        localStorage.clear();
    };

    return (
        <section className="resume__container">
            <h1>Sua pontuaçao final, {storedName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Arte</td>
                        <td>{score.artScore}</td>
                    </tr>
                    <tr>
                        <td>Ciência</td>
                        <td>{score.scienceScore}</td>
                    </tr>
                    <tr>
                        <td>História</td>
                        <td>{score.historyScore}</td>
                    </tr>
                </tbody>
            </table>
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

export default Resume