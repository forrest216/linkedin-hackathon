import React from 'react';
import zero from '../../images/0.jpeg';
import one from '../../images/1.jpeg';
import two from '../../images/2.jpeg';
import three from '../../images/3.jpeg';
import four from '../../images/4.jpeg';
import five from '../../images/5.jpeg';
import six from '../../images/6.jpeg';
import seven from '../../images/7.jpeg';
import eight from '../../images/8.jpeg';
import nine from '../../images/9.jpeg';
import ten from '../../images/10.jpeg';
import eleven from '../../images/11.jpeg';

const images = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven];

const ResultsPage = (props) => {
   let userList = props.results.length ? props.results.map((result, idx) => 
   <li key={idx}><img src={images[idx]} alt="Profile Pic"/>{result.name}{result.email}{result.major}</li>
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