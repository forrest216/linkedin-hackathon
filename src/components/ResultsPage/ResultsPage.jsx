import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

class ResultsPage extends Component {

   commonClasses = (resultClasses, currClasses) => {
      let counted = currClasses.reduce((acc, ele) => {
         if (resultClasses.includes(ele)) {
            acc += 1;
         }
         return acc;
      }, 0 );
      return counted;
   }

   render() {
      let userList = this.props.results.length ? this.props.results.map((result, idx) => 
      <li key={idx}>
         <img src={images[idx]} alt="Profile Pic"/>
         <p>{result.name}</p>
         <p>This person has {this.commonClasses(result.classes, this.props.currUser.classes)} classes in common with you!</p>
      </li>
      ) : <p>NO CONNECTIONS FOUND</p>;

      return ( 
         <div>
            <ul>
               {userList}
            </ul>
            <Link to='/'>Go Back to Search</Link>
         </div>
      );
   }
}
 
export default ResultsPage;
