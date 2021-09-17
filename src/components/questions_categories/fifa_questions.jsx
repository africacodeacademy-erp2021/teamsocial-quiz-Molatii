import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import './answer.css';
import Myhappy_emoji from '../scraping/emoji_happy/images/104-1046176_smiling-emoji-clipart.png';
import Mysad_emoji from '../scraping/emoji_sad/images/Emoji-1.jpg';
import { useContext } from 'react';
import { User } from '../User';
import './answer.css';



 function Fifa(props) {
const msg = useContext(User);

  const questions = [
    {
<<<<<<< Updated upstream
        questionText: 'when is the next World Cup ?',
        answerOptions: [
            { answerText: '2022', isCorrect: true },
            { answerText: '2023', isCorrect: false },
            { answerText: '2024', isCorrect: false },
=======
        questionText: 'The next World Cup is in 2022 ?',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
      
>>>>>>> Stashed changes
           
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
<<<<<<< Updated upstream
        questionText: 'S.A stands for',
        answerOptions: [
            { answerText: 'South Africa', isCorrect: true },
            { answerText: 'South Maseru ', isCorrect: false },
            { answerText: 'South America', isCorrect: false },
=======
        questionText: 'S.A stands for South Africa',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False ', isCorrect: false },
           
>>>>>>> Stashed changes
          
           
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

<<<<<<< Updated upstream
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
=======

const [currentQuestion, SetCurrentQuestion] = useState(0);
  const [random, setRandom] = useState(questions);
  const [showScore, SetShowScore] = useState(false);
  
  
  //shuffle and display randomly
  function shuffle_questions(array){
  
      var number = array.length,
      temp,
      index;
   while(number > 0){
  
      index = Math.floor(Math.random() * number);
      number--;
  
      temp = array[number];
      array[number] = array[index];
      array[index] = temp;
  
  }
     return array;
  } 
  
  //drop down option
  const [option,setOption] = useState();
  const [selected_num, setSelected_num] = useState(7);
    function optionChange(event){
  
      setOption(event.target.value);
       setSelected_num(event.target.value);
  
         if(selected_num == 5){
  
           shuffle_questions(questions);
           questions.splice(5,5);
           let temp = questions;
           setRandom(temp);
           
  
         }else{
  
          shuffle_questions(questions);
          questions.splice(7,3);
          let temp = questions;
          setRandom(temp);      
  
         }
  
          return selected_num;
    }
  
  
  const [score, SetScore] = useState(0);
  const space = " : "; 
  let memes ="";
  
  /**
   * add 1 to score if answer is correct
   * @param {number} isCorrect 
   */
  const handleAnswerButtonClick = (isCorrect) => {
  if (isCorrect === true) {
  SetScore(score + 1);
  
        //memes = Myhappy_emoji; 
        

    }else{

        //memes = Mysad_emoji;
        
    }
  

  
  const nextQuetions = currentQuestion + 1;
  
      if (nextQuetions < selected_num) {
  
          SetCurrentQuestion(nextQuetions);
      }
      else {
          SetShowScore(true)
      }
  }

 
  
  //display emoji
  const half_selected_num = selected_num / 2;
  let msg_2 = "";
  let meme = "";
  
  if(score >= half_selected_num){
   
         msg_2 ="Congratulation You Won the Game";
         meme = Myhappy_emoji;     
        
      }
      else
      {
         msg_2 = "Opps..Try Again";
         <br/>
         meme = Mysad_emoji;      
      
      }
  
  
  return (
  
  <div className="answers">
   <h4 className="my_line">Player Name: {msg}</h4>
  
    <div className="answers"> 
    <hr className="line"/> 
    <div className='cat'><h2>Select Number of questions</h2></div>  
    
    
    <select name='option' onChange={optionChange}>
    
    <option value="7">7 questions</option>
    <option value="5">5 questions</option>
   
    </select>
     <br/>

     <img src={memes}  alt="Answer Reactions" width="150px" height="150px"/>

    <hr className="line"/>   
  
    </div> 
  
    <br/>
    <div>
  
    <>
  
    <div className="answers">
        
       {showScore ? (
  
        <div className='score-section'>      
        {msg+space}You scored {score} out of {selected_num}
  
        {<br/>}
        {msg_2}
        {<br/>}
        <img src={meme}  alt="meme" width="310px" height="320px"/>
                
  
        </div>
        )
        :
        (
            
              <>
                
              <div>
              <div className='question-count'>
              <span>Question {currentQuestion + 1 }
  
               {space}
              
              </span>{selected_num}
              </div>
              <div className='answer-section'>
              
              {random[currentQuestion].questionText}

              </div>
              </div>
   
            <div className='answer-section'>
                   { 
                      random[currentQuestion].answerOptions.map((answerOptions) => (
  
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
>>>>>>> Stashed changes
  }

export default Fifa;