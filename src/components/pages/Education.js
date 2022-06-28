import PageLayout from "../common/PageLayout";

const Summary = () => {
    return ( 
        <PageLayout>
            <h1>Education</h1>
            <div className="my-3">
                 <h2>PMI Project Management Course - PMBOK 6th Edition - Mar. 2018 – Jul. 2018</h2>
                 <h3>Universidad ICESI, Cali, Colombia</h3>
            </div>
            <hr/>
            <div className="my-3">
                  <h2>Master in Informatics and Telecommunications Management - Jul. 2013 – Aug. 2015</h2>
                  <h3>Universidad ICESI, Cali, Colombia</h3>                 
            </div>
            <hr/>
            <div className="my-3">
                 <h2>BS, Systems Engineering - Feb. 2004 – Nov. 2009</h2>
                 <h3>Universidad del Valle, Cali, Colombia</h3>                 
            </div>
        </PageLayout>
     );
}
 
export default Summary;
