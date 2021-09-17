import { useState, useEffect } from 'react';

const MyForm = (callback:any, validation:any) => {
   
  const [values, setValues] = useState({
    username: '',
    
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    setErrors(validation(values));
    setIsSubmitting(true);
    
    //console.log(values.username);
   
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    
    [errors]
  );

  return { handleChange, handleSubmit, values, errors};
};

export default MyForm;
