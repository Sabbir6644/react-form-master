

const Form = () => {

     const handleSubmit=e=>{
          e.preventDefault();
         
console.log(e.target.name.value);
console.log(e.target.email.value);
console.log(e.target.password.value);
     }
     return (
          <div>
              <form onSubmit={handleSubmit}>
              <input placeholder="Your Name..." type="text" name="name"/> <br />
               <input placeholder="Your Email..." type="email" name="email"/> <br />
               <input placeholder="Your Password..." type="password" name="password"/> <br />
               <input type="submit" value="Submit" />
              </form>
          </div>
     );
};

export default Form;