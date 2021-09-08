import React, { useState } from 'react';
import Login from './login';
import Categories from './categories';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
  setIsSubmitted(true);
  }
  
  return (
    <>
    
    
        {!isSubmitted ? (
          <Login submitForm={submitForm} />
          ) : (
            <Categories/> 
            
            )}
    </>
  );
};

export default Form;
