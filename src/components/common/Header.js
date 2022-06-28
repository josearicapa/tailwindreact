import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {            
    const userContext = useContext(UserContext);
    const {user} = userContext;
    
    return ( 
        <header className="block bg-slate-800 w-full h-16 text-center box-border border-solid bg-gradient-to-r from-primaryColor to-secondaryColor">
            <h3 className="relative top-2 m-0 text-4xl">{user.name}</h3>
        </header>
     );
}
 
export default Header;
