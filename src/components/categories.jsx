import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Fifa from './questions_categories/fifa_questions'
import Generalquestions from "./questions_categories/general_questions";
import Mathquestions from "./questions_categories/math_questions";
import { Link } from 'react-router-dom';
import '../App.css';
import { User } from './User';
import { useState } from 'react';
import { useContext } from 'react';
import Login from './login';

 function Categories() {
    const msg = useContext(User);
    
    ////
    const playername= JSON.stringify(localStorage.getItem('username'));
    const myuserone = playername.replace('"','');
    const myuser = myuserone.replace('"','');        
   


    return(
        <>
           <header>
              <div className='player'>Player Name : {myuser}
              </div>             
           </header>

           <br/>
           <div className='cat'><h2>select one of the categories</h2></div>         
           <main> 
           <Link to='/Generalquestions'><button  className='my_btn'  >General_questions</button> </Link>
           <Link to='/Mathquestions'> <button  className='my_btn' >Math_questions</button> </Link>  
           <Link to='/Fifa'> <button  className='my_btn' >Fifa_questions </button></Link>       
          </main>

          <hr className="line"/>
          
      <Switch> 
            <User.Provider value={myuser}>
              <Route  path='/Fifa'>
              <Fifa/>
              </Route>
            
              <Route  path='/Generalquestions'>
              <Generalquestions/>
              </Route>
            
              <Route  path='/Mathquestions'>
              <Mathquestions/>
              </Route>

           </User.Provider>
      </Switch>
          
        </>
    );

}
    
export default Categories;
