import React, { useState } from 'react';
import { useContext } from 'react';
import { User } from '../User';
import './answer.css';



 function Fifa() {
const msg = useContext(User);

  const questions = [
    {
      questionText: 'The next World Cup is in 2022 ?',
      answerOptions: [
          { answerText: 'True', isCorrect: true },
          { answerText: 'False', isCorrect: false },
    
       
        ],
    },
    {
        questionText: 'Messi is the player for which team  ?',
        answerOptions: [
            { answerText: 'PSG', isCorrect: true },
            { answerText: 'Barcelona', isCorrect: false },
            { answerText: 'Chiefs', isCorrect: false },
            
        ],
    },
    {
        questionText: 'which country won the world Cup in 2010 ?',
        answerOptions: [
            { answerText: 'Spain', isCorrect: true },
            { answerText: 'Lesotho', isCorrect: false },
            { answerText: 'S.A', isCorrect: false },
           
        ],
    },
    {
      questionText: 'S.A stands for South Africa',
      answerOptions: [
          { answerText: 'True', isCorrect: true },
          { answerText: 'False ', isCorrect: false },
         
        
           
        ],
    },
    {
        questionText: 'The next world cup will be in  ?',
        answerOptions: [
            { answerText: 'QATAR', isCorrect: false },
            { answerText: 'Spain', isCorrect: false },
            { answerText: 'Lesotho', isCorrect: true },
          
            
        ],
    },
    {
        questionText: 'when did Messi make move from Barcelona ?',
        answerOptions: [
            { answerText: '2020', isCorrect: false },
            { answerText: '2022', isCorrect: false },
            { answerText: '2021', isCorrect: true },
           
        ],
    },
    {
        questionText: 'LEFA stands for ?',
        answerOptions: [
          
            { answerText: 'Lesotho football association', isCorrect: true },
            { answerText: 'lesotho football', isCorrect: false },
            { answerText: 'football association', isCorrect: false },
           
           
        ],
    }  ,
    {
        questionText: 'in which country can you go to afriski?',
        answerOptions: [
            { answerText: 'Lesotho', isCorrect: true },
            { answerText: 'South africa', isCorrect: false },
            { answerText: 'USA', isCorrect: false },
          
        
            
        ],
    },
    {
        questionText: 'who is the president of Caf ?',
        answerOptions: [
            { answerText: 'Eric Molati', isCorrect: false },
            { answerText: 'Molati', isCorrect: false },
            { answerText: 'Patrice Motsepe', isCorrect: true },
           
           
        ],
    },
    {
        questionText: 'CAf stands for ?',
        answerOptions: [
            { answerText: 'Confederation of African Football', isCorrect: true },
            { answerText: 'maseru', isCorrect: false }, 
            { answerText: 'Confederation African Football ', isCorrect: false },
           
        ],
    }   




];

const [currentQuestion, SetCurrentQuestion] = useState(0);
const [showScore, SetShowScore] = useState(false);
const random_question = Math.floor(Math.random()* questions.length);
const [score, SetScore] = useState(0);
const space = " : "; 

const handleAnswerButtonClick = (isCorrect) => {
if (isCorrect === true) {
SetScore(score + 1);
}

const nextQuetions = currentQuestion + 1;

if (nextQuetions < questions.length) {
SetCurrentQuestion(nextQuetions);
}
else {
SetShowScore(true)
}
}

    return (
<div className="answers">
  <br/>
  

<div>

<>

<div className="answers">
  {showScore ? (
    <div className='score-section'>
    <div className="username">{msg}</div>
      You scored {score} out of {questions.length}
    </div>
  )
    :
    (

      <>
        <div>
          <div className='question-count'>
            <span>Question {currentQuestion + 1 }

             {space}
            
            </span>{questions.length }
          </div>
          <div className='answer-section'>
           
          {questions[random_question].questionText}
          </div>
        </div>

        <div className='answer-section'>
          {
           questions[random_question].answerOptions.map((answerOptions) => (
              <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
            ))
          }
        </div>
      </>
    )}
</div>
</>

           
              
      </div>

</div>
      
    );
  }

export default Fifa;