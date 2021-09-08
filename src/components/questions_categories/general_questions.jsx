import React, { useState } from 'react';
import './answer.css';
import { useContext } from 'react';
import { User } from '../User';
import './answer.css';

 function General_question() {
  const msg = useContext(User);

   
  const questions = [
      {
          questionText: 'What is the capital city of Lesotho?',
          answerOptions: [
              { answerText: 'Maseru', isCorrect: true },
              { answerText: 'Leribe', isCorrect: false },
              { answerText: 'Quthing', isCorrect: false },
             
          ],
      },
      {
          questionText: 'The is the Name of the first King of Lestho',
          answerOptions: [
              { answerText: 'Moshoeshoe', isCorrect: true },
              { answerText: 'Molati', isCorrect: false },
              { answerText: 'Lerotholi', isCorrect: false },
              
          ],
      },
      {
          questionText: 'How many mounths are there in a year',
          answerOptions: [
              { answerText: '12', isCorrect: true },
              { answerText: '4', isCorrect: false },
              { answerText: '6', isCorrect: false },
             
          ],
      },
      {
          questionText: 'What B.U stand for ?',
          answerOptions: [
              { answerText: 'Botho university', isCorrect: true },
              { answerText: 'Botho ', isCorrect: false },
              { answerText: ' university', isCorrect: false },
            
             
          ],
      },
      {
          questionText: 'where is lesotho on the map',
          answerOptions: [
              { answerText: 'inside south', isCorrect: false },
              { answerText: 'outside south africa', isCorrect: false },
              { answerText: 'inside south africa', isCorrect: true },
            
              
          ],
      },
      {
          questionText: 'How many days are there in a year',
          answerOptions: [
              { answerText: '36', isCorrect: false },
              { answerText: '360', isCorrect: false },
              { answerText: '365', isCorrect: true },
             
          ],
      },
      {
          questionText: 'how many does it take to get Bsc',
          answerOptions: [
            
              { answerText: '4', isCorrect: true },
              { answerText: '44', isCorrect: false },
              { answerText: '94', isCorrect: false },
             
             
          ],
      }  ,
      {
          questionText: 'what does MGC stand for?',
          answerOptions: [
              { answerText: 'Matekane group of companies', isCorrect: true },
              { answerText: 'Matekane companies', isCorrect: false },
              { answerText: 'group of companies', isCorrect: false },
            
          
              
          ],
      },
      {
          questionText: 'what does RAM stand for?',
          answerOptions: [
              { answerText: 'random', isCorrect: false },
              { answerText: 'random memory', isCorrect: false },
              { answerText: 'random access memory', isCorrect: true },
             
             
          ],
      },
      {
          questionText: 'what does PC stand for?',
          answerOptions: [
              { answerText: 'person computer', isCorrect: true },
              { answerText: 'p computer', isCorrect: false }, 
              { answerText: 'person', isCorrect: false },
             
          ],
      }   
  



  ];

const [currentQuestion, SetCurrentQuestion] = useState(0);
const [showScore, SetShowScore] = useState(false);
const [score, SetScore] = useState(0);
const bb = " : "; 

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

               {bb}
              
              </span>{questions.length }
            </div>
            <div className='answer-section'>
             
            {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className='answer-section'>
            {
             questions[currentQuestion].answerOptions.map((answerOptions) => (
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

export default General_question;