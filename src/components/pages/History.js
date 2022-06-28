import PageLayout from "../common/PageLayout";

function History(props) {
    return (
        <PageLayout>
            <h1>Carrer history</h1>
            <h2>Globant Cali</h2>
            <h3>Web UI Developer, Sr - May. 2021 to present</h3>
            <div className="flex flex-col">
                <ul>
                    <li>Provide software development consulting services for the client Gannett/USA.</li>
                    <li>Be responsible for developing and implementing user interface components using technologies such as React.js, Jest, express.js for the SNAP (Single Navigation Account Platform) project.</li>                    
                </ul>                            
            </div>
            <h2 className="mt-10">Open International, Cali, Colombia</h2>
            <h3>Front-End Software Development Leader - Feb. 2015 – May. 2021</h3>
            <div className="flex flex-col">
                <ul>
                    <li>Led a technology upgrade project migrating applications built in .NET to HTML5 applications using the Sencha Ext-JS Framework</li>
                    <li>Led the definition of the new architecture with React/Redux for the creation of HTML5 applications for the Open Smartflex product</li>
                    <li>Defined a test automation strategy for HTML5 applications, aligning the areas of Product Management, Backend and User experience in the test automation process</li>
                    <li>Led the implementation of a test automation framework for HTML5 applications, achieving the early detection of product defects and reducing testing times by 90% before each release</li>
                </ul>
            </div>
            <h3 className="mt-4">Senior Software Developer - Jan. 2009 – Feb. 2015</h3>
            <ul>
                <li>Develop applications using PL/SQL-Oracle, Java and .NET languages programming </li>
                <li>Developed an application for displaying maps in C#, managing to integrate maps from Google Maps </li>
                <li>Optimus Gladius Recognition. He was one of the best software developers of 2014</li>
            </ul>
            <h2 className="mt-10">Parquesoft/Abaco Group S.A., Cali, Colombia</h2>
            <h3>Senior Software Developer - Mar. 2005 – Aug. 2008</h3>
            <ul>
                <li>Led a group of 3 software developers</li>
                <li>Develop Web applications using JSP, Java, PL/pgSQL (Postgres) with Tomcat for Ecosfera SWM</li>
                <li>Developed an application in Java for displaying maps, managing to integrate maps from Google Maps</li>
            </ul>            
        </PageLayout>
    );
}

export default History;
