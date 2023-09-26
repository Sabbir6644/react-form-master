import { useEffect, useRef, useState } from "react";


const RefForm = () => {
     const nameRef = useRef();
     const emailRef = useRef();
     const passwordRef = useRef();
     const [error,setError]= useState([]);
     const handleSubmit=e=>{
         e.preventDefault();
         if((passwordRef.current.value).length< 6){
          setError('password must more then 6')
         }else{
          console.log(nameRef.current.value); 
          console.log(emailRef.current.value); 
          console.log(passwordRef.current.value); 
         }
        
     } 
     useEffect(()=>{
          nameRef.current.focus();
     },[])
     
     return (
          <div>
               <form onSubmit={handleSubmit}>
              <input ref={nameRef} defaultValue={'Sabbir'} placeholder="Your Name..." type="text" name="name"/> <br />
               <input ref={emailRef} placeholder="Your Email..." type="email" name="email"/> <br />
               <input ref={passwordRef} placeholder="Your Password..." type="password" name="password"/> <br />
               <input type="submit" value="Submit" />
              </form>
              <p>{error}</p>
          </div>
     );
};

export default RefForm;