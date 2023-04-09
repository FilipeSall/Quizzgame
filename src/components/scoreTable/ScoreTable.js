import React from "react";
import './ScoreTable.css';
import { FaRegSadTear, FaRegMeh, FaRegSmile, FaRegGrinStars, FaTrophy } from 'react-icons/fa';


function ScoreTable({ categories }) {

    function getFeedbackText(score, categoryName) {
        if (score <= 3) {
            return (
                <>
                    <FaRegSadTear /> Seus conhecimentos em {categoryName} são horríveis! Estude!
                </>
            );
        } else if (score < 6) {
            return (
                <>
                    <FaRegMeh /> Você precisa melhorar seus conhecimentos em {categoryName}.
                </>
            );
        } else if (score < 8) {
            return (
                <>
                    <FaRegSmile /> Você tem um conhecimento razoável em {categoryName}.
                </>
            );
        } else if (score === 10) {
            return (
                <>
                    <FaRegGrinStars /> Parabéns! Você conseguiu gabaritar {categoryName}!
                </>
            );
        } else {
            return (
                <>
                    <FaTrophy /> Parabéns! Você é craque em {categoryName}!
                </>
            );
        }
    }


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.name}>
                            <td>{category.name}</td>
                            <td>{category.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="feedback-container">
                {categories.map((category) => (
                    <p key={category.name} className="feedback-text">
                        <span>{getFeedbackText(category.score, category.name)}</span>
                    </p>
                ))}
            </div>
        </>
    );
}

export default ScoreTable;
