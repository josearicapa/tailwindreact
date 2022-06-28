import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from './context/UserContext';
import Qualifications from "./components/pages/Qualifications";
import Education from "./components/pages/Education";
import Summary from "./components/pages/Summary";
import History from './components/pages/History';
import PersonalInfo from './components/pages/PersonalInfo';

export default function App() {  
  const [user, setUser] = useState({
    id: 16378324,
    name: "Jose Luis Aricapa Martinez",
    nationality: "Colombian",
    dateBirth: "15/Nov/1984",
    maritalStatus: "Married",
    religion: "Catolic"
  });

  const [contactDetail, setContactDetail] = useState({    
    address: "CR 85E #42-50 - 904-D",
    phone: "3103610082",
    personalEmail: "jose.aricapa@gmail.com",
    workEmail: "jose.aricapa@globant.com",    
  });

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      contactDetail,
      setContactDetail
    }}>
   <BrowserRouter>    
     <Routes>
       <Route path= "/" element={<Summary/>} />
       <Route path="/personalInfo" element={<PersonalInfo />} />
       <Route path="/qualifications" element={<Qualifications />} />
       <Route path="/education" element={<Education />} />
       <Route path="/history" element={<History />} />
     </Routes>
  </BrowserRouter>  
  </UserContext.Provider>
  )
}
