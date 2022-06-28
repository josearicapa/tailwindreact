import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";

const Link  = ({isActive,children,...props}) => {    
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}

const Navigator = () => {
    const {pathname} = useLocation();
    return (          
        <div className="flex flex-col relative content-start items-baseline w-64 h-screen bg-gradient-to-r from-primaryColor to-secondaryColor">            
            <Link to="/personalInfo" isActive={pathname === '/personalInfo'}>
            Personal Information
            </Link>
            <Link to="/" isActive={pathname === '/'}>
            Career Summary
            </Link>
             <Link to="/qualifications" isActive={pathname === '/qualifications'}>
             Summary of Qualifications
             </Link>            
             <Link to="/history" isActive={pathname === '/history'}>
             Carrer History
             </Link>
             <Link to="/education" isActive={pathname === '/education'}>
             Education
             </Link>
        </div>       
        
    );
}
 
export default Navigator;
