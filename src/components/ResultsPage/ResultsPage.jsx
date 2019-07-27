import React from 'react';

const ResultsPage = (props) => {
   let userList = props.results.length ? props.results.map((result, idx) => 
   <li key={idx}>{result.name}{result.email}{result.major}</li>
   ) : <p>NO CONNECTIONS FOUND</p>;
   return ( 
      <>
         <ul>
            {userList}
         </ul>
      </>
    );
}
 
export default ResultsPage;