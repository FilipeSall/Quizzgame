import React, { useContext } from 'react';
import './scoredisplay.css';
import { GiMedievalGate, GiAtom, GiPalette } from "react-icons/gi";
import { GlobalContext } from '../../GlobalContext';

function ScoreDisplay() {

    const {score} = useContext(GlobalContext);

    const sizeIcon = 35;

    const themes = [
        {
            title: 'História',
            icon: <GiMedievalGate size={sizeIcon}/>,
            score: score.historyScore
        },
        {
            title: 'Ciência',
            icon: <GiAtom size={sizeIcon} />,
            score: score.scienceScore
        },
        {
            title: 'Arte',
            icon: <GiPalette size={sizeIcon} />,
            score: score.artScore
        }
    ]

    return (
        <div className='score-display'>
            {themes.map((theme, i) => (
                <div className='theme-title' key={i}>
                    {theme.icon}
                    <h1>{theme.title}</h1>
                    <div className='display'>{theme.score}</div>
                </div>
            ))}
        </div>
    )
}

export default ScoreDisplay