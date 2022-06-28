import PageLayout from "../common/PageLayout";

const Qualifications = () => {
    return (
        <PageLayout>            
            <h1>Summary of Qualifications</h1>
            <h2 className="my-4">Skills</h2>
            <div className="flex flex-col">
                <ul>
                    <li>HTML5</li>
                    <li>CSS/SaaS</li>
                    <li>JavaScript</li>
                </ul>

                <ul>
                    <li>Jest</li>
                    <li>React</li>
                    <li>express</li>
                </ul>

                <ul>
                    <li>Cucumber</li>
                    <li>NightwatchJS</li>
                    <li>TDD/BDD</li>
                </ul>

                <ul>
                    <li>Java</li>
                    <li>Git</li>
                    <li>PL/SQL</li>
                </ul>
            </div>
            <h2 className="my-4">Languages</h2>
            <div className="flex flex-col">
                <ul>
                    <li>Spanish (native speaker)</li>
                    <li>English (upper intermediate)</li>                    
                </ul>                
            </div>            
        </PageLayout>
    );
}

export default Qualifications;
