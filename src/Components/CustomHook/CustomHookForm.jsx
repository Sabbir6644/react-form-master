import useInputState from "./useInputState";
import useValueState from "./useValueState";

const CustomHookForm = () => {
     const inputFieldValue = useValueState();
     const [inputValue, handleChange] = useInputState();
     // const [emailValue, handleEmailChange] = useInputState();
     const handleSubmit=e=>{
          e.preventDefault();
          // console.log('from custom hook', inputValue, emailValue);
          console.log(inputFieldValue.inputsValue);
     }
     return (
          <div>
               <form onSubmit={handleSubmit}>
              <input value={inputValue} onChange={handleChange} placeholder="Your Name..." type="text" name="name"/> <br />
               <input {...inputFieldValue} placeholder="Your Email..." type="email" name="email"/> <br />
               <input  placeholder="Your Password..." type="password" name="password"/> <br />
               <input type="submit" value="Submit" />
              </form>
          </div>
     );
};

export default CustomHookForm;