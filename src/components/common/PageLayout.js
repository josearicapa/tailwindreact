import Header from "./Header";
import Navigator from "./Navigator";

const PageLayout = ({children}) => {        
    return (  
        <>
            <Header/>
            <div className="flex flex-row">
            <Navigator/>
                <main className="max-w-5xl px-4 py-0 box-border">
                    {children}
                </main>                
            </div>            
        </>
    );
}
 
export default PageLayout;

