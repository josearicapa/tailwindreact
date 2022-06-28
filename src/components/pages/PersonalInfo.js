import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import PageLayout from '../common/PageLayout';

const PersonalInfo = () => {
    const userContext = useContext(UserContext);
    const {user,setUser} = userContext;
    const {contactDetail} = userContext;

    const handleClick = () => { 
        const newUser = {...user};
        newUser.name = "Atoms Team";
        setUser(newUser);
     }
                
    return (
        <PageLayout>
            <h1>{''}</h1>
            <h2>General</h2>
            <div className='flex'>
                <ul>
                    <li>{user.name}</li>
                    <li>{user.nationality}</li>
                    <li>{user.dateBirth}</li>
                    <li>{user.maritalStatus}</li>
                    <li>{user.religion}</li>
                </ul>                            
            </div>
            <h2>Contact Details</h2>
            <div className='flex'>
                <ul>
                    <li>{contactDetail.address}</li>
                    <li>{contactDetail.phone}</li>
                    <li>{contactDetail.personalEmail}</li>
                    <li>{contactDetail.workEmail}</li>                    
                </ul>                            
            </div>             
                <button onClick={handleClick}>Actualizar nombre</button>            
        </PageLayout>        
    );
}

export default PersonalInfo;
