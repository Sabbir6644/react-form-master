import { useState } from "react";

const StateFulForm = () => {
     const [name,setName]= useState([]);
     const [email,setEmail]= useState([]);
     const [password,setPassword]= useState([]);

     const handleSubmit= e =>{
     e.preventDefault();
          setName(e.target.name.value);
          setEmail(e.target.email.value);
          setPassword(e.target.password.value);
     }
     const handleNameChange =e=>{
          setName(e.target.value); 
     }
     const handleEmailChange =e=>{
          setEmail(e.target.value);
     }
     const handlePasswordChange =e=>{
          setPassword(e.target.value);
     }
     
     console.log('Name: ', name, 'Email: ', email,'Password: ',password);
     return (
          <div>
               <form onSubmit={handleSubmit}>
              <input onChange={handleNameChange} placeholder="Your Name..." type="text" name="name"/> <br />
               <input onChange={handleEmailChange} placeholder="Your Email..." type="email" name="email"/> <br />
               <input onChange={handlePasswordChange} placeholder="Your Password..." type="password" name="password"/> <br />
               <input type="submit" value="Submit" />
              </form>
          </div>
     );
};

export default StateFulForm;