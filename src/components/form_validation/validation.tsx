

export default function Validation(values:any) {
  let errors:any = {};
 
  
    if (!values.username.trim()) {

      errors.username = 'Please Enter User Name';
      console.log('Failed');

    } else if (values.username.length > 30 || values.username.length < 3) {      

      errors.username = 'Username Characters Should be below 30 and above 2';
      console.log('Failed');

    } else{
      var user = values.username;
      console.log('Your In...' + user);
      
    }
    
    return errors;

}