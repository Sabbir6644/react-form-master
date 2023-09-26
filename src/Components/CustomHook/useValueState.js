import { useState } from "react"

const useValueState= (defaultValue)=>{
     const [inputsValue, setInputsValue]= useState();
     const onChange=e=>{
          setInputsValue(e.target.value);
     }
     return{
          inputsValue,
          onChange
     }
}
export default useValueState;

// import { useState } from "react";

// const useValueState = (defaultValue) => {
//   const [inputValue, setInputValue] = useState(defaultValue); // Initialize with the defaultValue as an array

//   const onChange = (e) => {
//     setInputValue(e.target.value); // Update inputValue with the new value
//   };

//   return {
//     inputValue,
//     onChange,
//   };
// };

// export default useValueState;
