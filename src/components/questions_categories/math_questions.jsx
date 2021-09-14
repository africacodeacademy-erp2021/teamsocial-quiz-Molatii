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
const [selected_num, setSelected_num] = useState(10);
  function optionChange(event){

    setOption(event.target.value);
     setSelected_num(event.target.value);

       if(selected_num == 5){

         shuffle_questions(questions);
         questions.splice(5,5);
         let temp = questions;
         setRandom(temp);
         

       }else if(selected_num == 7){

        shuffle_questions(questions);
        questions.splice(7,3);
        let temp = questions;
        setRandom(temp);      

       }else{

        shuffle_questions(questions);
        questions.splice(10,10);
        let temp = questions;
        setRandom(temp);
       

       }

        return selected_num;
  }


const [score, SetScore] = useState(0);
const space = " : "; 

//add 1 to score if answer is correct
const handleAnswerButtonClick = (isCorrect) => {
if (isCorrect === true) {
SetScore(score + 1);
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
let check = "";

if(score >= half_selected_num){
 
    check = "yes!!!!!!!!!!!!!!!!!!";

    }
    else
    {

    check = "No............";

    }


return (

<div className="answers">
 <h4 className="my_line">Player Name: {msg}</h4>

  <div className="answers"> 
  <br/>
  
  <select name='option' onChange={optionChange}>
  <option >select number of questions</option>
    <option value="5">5 questions</option>
    <option value="7">7 questions</option>
    
   
  </select>
  <hr className="line"/>   

  </div> 

  <br/>
  <div>

  <>

  <div className="answers">
      
     {showScore ? (

      <div className='score-section'>      
      You scored {score} out of {selected_num}

      {<br/>}
      {check}

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
  }

export default Math_questions;