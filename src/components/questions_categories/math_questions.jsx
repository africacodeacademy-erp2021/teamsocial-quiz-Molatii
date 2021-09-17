import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import './answer.css';
import Myhappy_emoji from '../scraping/emoji_happy/images/104-1046176_smiling-emoji-clipart.png';
import Mysad_emoji from '../scraping/emoji_sad/images/Emoji-1.jpg';
import { useContext } from 'react';
import { User } from '../User';
import Categories from '../categories';
import './answer.css';

 function Math_questions(props) {
    const msg = useContext(User);
    

  const questions = [
    {
        questionText: '12 + 12 = 22',
        answerOptions: [
            { answerText: '22', isCorrect: true },
            { answerText: '66', isCorrect: false },
            { answerText: '345', isCorrect: false },
           
<<<<<<< Updated upstream
=======
           
>>>>>>> Stashed changes
        ],
    },
    {
        questionText: '79 - 8 = 71',
        answerOptions: [
<<<<<<< Updated upstream
            { answerText: '71', isCorrect: true },
            { answerText: '70', isCorrect: false },
            { answerText: '72', isCorrect: false },
=======
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
           
>>>>>>> Stashed changes
            
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
<<<<<<< Updated upstream
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

=======
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
          
  
  }    

     if(isCorrect === true){

        memes = Myhappy_emoji; 
        //console.log("hhh"+memes);
     }else{
>>>>>>> Stashed changes

         memes = Mysad_emoji;
        //console.log("Sssss"+memes);

     }   
     
    

<<<<<<< Updated upstream
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
=======
  
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
>>>>>>> Stashed changes
);
}  

export default Math_questions;