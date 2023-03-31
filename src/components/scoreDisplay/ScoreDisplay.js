import React, { useContext } from 'react';
import './scoredisplay.css';
import { GiMedievalGate, GiAtom, GiPalette, GiGamepad } from "react-icons/gi";
import { BiMovie, BiMusic } from "react-icons/bi";
import { GlobalContext } from '../../GlobalContext';
function ScoreDisplay() {

    const {score, quizzgameType} = useContext(GlobalContext);

    const sizeIcon = 35;

    const DefaultThemes = [
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

    const funThemes = [
        {
            title: 'Cinema',
            icon: <BiMovie size={sizeIcon}/>,
            score: score.moviesScore
        },
        {
            title: 'Jogos',
            icon: <GiGamepad size={sizeIcon}/>,
            score: score.gamesScore
        },
        {
            title: 'Musica',
            icon: <BiMusic size={sizeIcon}/>,
            score: score.musicScore
        },
    ]

    let themes = [];

    if (quizzgameType === 'default') themes = DefaultThemes;
    if (quizzgameType === 'fun') themes = funThemes;

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
