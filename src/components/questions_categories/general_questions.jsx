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
        questionText: 'There are 12 mounths in a year',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        
         
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
    <option value="10">All questions</option>
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

export default General_question;