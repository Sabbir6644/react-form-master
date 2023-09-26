
import { createContext } from 'react';
import './App.css'
import ReusableForm from './Components/Form/ReusableForm'
import { useState } from 'react';
import Profile from './profile';
import Charts from './Components/Charts';

// import CustomHookForm from './Components/CustomHook/CustomHookForm'
// import RefForm from './Components/Form/RefForm'
// import StateFulForm from './Components/Form/StateFulForm'
// import Form from './Components/Form/Form'

export const DataContext = createContext();
function App() {
 const [formData, setFormData]= useState();
const handleForm=data=>{
  setFormData(data);

}

  return (
    <>
    <div>
      <Charts></Charts>
    </div>
     {/* <Form></Form> */}
     {/* <StateFulForm></StateFulForm> */}
     {/* <RefForm></RefForm> */}
     {/* <CustomHookForm></CustomHookForm> */}
     
     {/* <ReusableForm handleForm={handleForm} formName={'Login'} btnName={'Log'}>
      
      <div>
        <h2>Please Login</h2>
        <p>Please keep update your data</p>
      </div>
     </ReusableForm>

     <DataContext.Provider value={formData}>
     <Profile></Profile>
     </DataContext.Provider> */}


      
    </>
  )
}

export default App
