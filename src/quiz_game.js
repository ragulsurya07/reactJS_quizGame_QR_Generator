import { useState } from 'react';
import questions from './quiz_game_quest';
import './quiz_game.css';

function QuizGame(){
    const [questIdx, setQuestIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const current= questions[questIdx];
    // console.log('current : ',questIdx)
    
    const select = (idx) => {
        // console.log(idx);
        // console.log('answer : ',current.answer);
        if (current.answer === idx){
            setScore(score + 1);
        }

        const nextQuest = questIdx + 1;
        // console.log('questIdx : ',questIdx);
        // console.log('nextQuest : ',nextQuest);
        // console.log('Total length : ',questions.length);
        if (nextQuest < questions.length){
            setQuestIdx(nextQuest);   
        } else {
            setShowScore(true);
        }
    }

    const restart = () => {
        setQuestIdx(0);
        setScore(0);
        setShowScore(false);
    }


    return (
        
        <div className='container-fluid'>
            {
                showScore ? (
            
                <div className="container">
                <div className="w-50 m-auto mt-5 pt-5">
                <h2>Quiz game</h2>
                <div className="card">
                    <div className="card-body score">
                        <h3>Your score is <span>{score}</span> out of <span>{questions.length}</span></h3>
                        <button className='btn btn-secondary' onClick={restart}>Restart game</button>
                        <a href='/router'><button className='btn btn-secondary' id='exit_btn'>Exit</button></a>
                    </div>
                </div>
                </div>
                </div>
                
            ) 
            : (
                <div className="container">
                <div className="w-50 m-auto mt-5 pt-5">
                <h2>Quiz game</h2>
                <div className="card">
                    <div className="card-body">
                        <h4>{current.question}</h4>
                    <div className='row'>
                        {current.options.map((option,idx) => {
                            return <p onClick={()=> select(idx)}>{option}</p>
                        })}
                    </div>
                    </div>
                </div>
                </div>
                </div>
                )
            }
            
        </div>
        
    )
}

export default QuizGame;
