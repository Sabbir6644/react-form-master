
const ReusableForm = ({handleForm, formName, btnName, children} ) => {
     const handleSubmit=e=>{
          e.preventDefault();
          const data = {
               Name: e.target.name.value,
               Email: e.target.email.value,
               Password: e.target.password.value
          }
          handleForm(data);
     }
     return (
          <div>
               {children}
               <h2>{formName}</h2>
               <form onSubmit={handleSubmit}>
              <input placeholder="Your Name..." type="text" name="name"/> <br />
               <input placeholder="Your Email..." type="email" name="email"/> <br />
               <input placeholder="Your Password..." type="password" name="password"/> <br />
               <input type="submit" value={btnName} />
              </form>
          </div>
     );
};

export default ReusableForm;