import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Fifa from './questions_categories/fifa_questions'
import Generalquestions from "./questions_categories/general_questions";
import Mathquestions from "./questions_categories/math_questions";
import '../App.css';
import { User } from './User';
import { useState } from 'react';
import { useContext } from 'react';


 function Categories() {
    const msg = useContext(User);
    
    const playername= JSON.stringify(localStorage.getItem('username'));
    const myuserone = playername.replace('"','');
    const myuser = myuserone.replace('"','');        
   
    //
    function MyContent(){
     let history = useHistory();
      const click_fifa_questions = () => history.push("/Fifa");
      const click_general_questions= () =>history.push("/Generalquestions");
      const clickH_math_questions = () => history.push("/Mathquestions");
  
  return(
      <div>
           <header>
              <div className='player'>Player Name : {myuser}   </div>             
           </header>
           <br/>
           <div className='cat'><h2>select one of the categories</h2></div>    

      <hr className="line"/>   

      <main> 
           <button  className='my_btn' onClick= {click_general_questions} >General_questions</button> 
           <button  className='my_btn' onClick= {clickH_math_questions}>Math_questions</button> 
           <button  className='my_btn' onClick= {click_fifa_questions}>Fifa_questions </button>       
      </main> 
      
      </div>
  )
  }


    return(
        <>

          
      <Switch> 
            <User.Provider value={myuser}>

                <Route path="/Fifa" exact component={Fifa}/>
                <Route path="/Generalquestions" exact component={Generalquestions}/>
                <Route path="/Mathquestions" exact component={Mathquestions}/>
                <Route path= "/" exact component = {MyContent}/>         

           </User.Provider>
      </Switch>
          
        </>
    );

}
    
export default Categories;
