import { useContext } from "react";
import { DataContext } from "./App";


const Profile = () => {
 const dataFromForm = useContext(DataContext)
 console.log(dataFromForm);
     return (
          <div>
               <h2>Name: {dataFromForm.Name}</h2>
               <h2>Email: {dataFromForm.Email}</h2>
          </div>
     );
};

export default Profile;