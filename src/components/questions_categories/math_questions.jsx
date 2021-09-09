import React, { useState } from 'react';
import './answer.css';
import { useContext } from 'react';
import { User } from '../User';
import './answer.css';

 function Math_questions() {
    const msg = useContext(User);

  const questions = [
    {
        questionText: '12 + 12 = ?',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
           
           ],
    },
    {
        questionText: '79 - 8 = ?',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
                   
        ],
    },
    {
        questionText: '2000 / 66 = ?',
        answerOptions: [
            { answerText: '30.3', isCorrect: true },
            { answerText: '30', isCorrect: false },
            { answerText: '31', isCorrect: false },
           
        ],
    },
    {
        questionText: '55 * 1087 = ?',
        answerOptions: [
            { answerText: '59 789', isCorrect: true },
            { answerText: '59000 ', isCorrect: false },
            { answerText: ' 54322', isCorrect: false },
          
           
        ],
    },
    {
        questionText: '78 * 9 = ?',
        answerOptions: [
            { answerText: '99', isCorrect: false },
            { answerText: '77', isCorrect: false },
            { answerText: '702', isCorrect: true },
          
            
        ],
    },
    {
        questionText: '77 / 7 = ?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '10', isCorrect: false },
            { answerText: '11', isCorrect: true },
           
        ],
    },
    {
        questionText: '32 + 90 000 = ?',
        answerOptions: [
          
            { answerText: '90 032', isCorrect: true },
            { answerText: '90 320', isCorrect: false },
            { answerText: '90 000', isCorrect: false },
           
           
        ],
    }  ,
    {
        questionText: '86 * 45 = ?',
        answerOptions: [
            { answerText: '3 870', isCorrect: true },
            { answerText: '3 000', isCorrect: false },
            { answerText: '43 000', isCorrect: false },
          
        
            
        ],
    },
    {
        questionText: ' 56 - 1 = ?',
        answerOptions: [
            { answerText: '56', isCorrect: false },
            { answerText: '55', isCorrect: false },
            { answerText: '55', isCorrect: true },
           
           
        ],
    },
    {
        questionText: '43 * 22 = ?',
        answerOptions: [
            { answerText: '946', isCorrect: true },
            { answerText: '944', isCorrect: false }, 
            { answerText: '947', isCorrect: false },
           
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

                <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                {answerOptions.answerText}</button>
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

export default Math_questions;