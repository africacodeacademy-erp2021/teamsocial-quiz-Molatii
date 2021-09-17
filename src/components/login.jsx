import React from 'react';
import validate from './form_validation/validation';
import MyForm from './form_validation/myForm';




const Login = ({submitForm }) => {


  const { handleChange, handleSubmit, values, errors } = MyForm(submitForm,validate);
 
 
  const playerName = ()=>{
  localStorage.setItem("username",values.username)
}
  
  return (
    <div>
      <form onSubmit={handleSubmit} className='register_form'>
           <br/>
           <label className='form-label'> User Name</label><br/>

           <input className='form-input' type='text'
           name='username' placeholder='Enter Your User Name Here'
           
           value={values.username} onChange={handleChange}        
           
           />

           {errors.username && <p>{errors.username}</p>}
           <br/>
           <br/>          
           <button className='btn' type='submit' onClick={playerName}> Start Game </button>
        
      
      </form>
      
    </div>
    
  );
};

export default Login;
