import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ResultsPage.css';
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
import Mahtab from '../../images/Mahtab.jpeg';
import results from '../../images/results-top.png';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';
import back from '../../images/btn-back.png';

const images = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven];

class ResultsPage extends Component {

   commonClasses = (resultClasses, currClasses) => {
      let counted = currClasses.length ? currClasses.reduce((acc, ele) => {
         if (resultClasses.includes(ele)) {
            acc += 1;
         }
         return acc;
      }, 0 ) : 0;
      return counted;
   }

   render() {
      let name = this.props.currUser ? this.props.currUser.name : '';
      let email = this.props.currUser ? this.props.currUser.email : '';

      let userList = this.props.results.length ? this.props.results.map((result, idx) => 
         <div key={idx} className="card res-col-1-2">
            <div className="picture res-col-1-2">
                  {result.name.includes("Mahtab") ? <img src={Mahtab} alt="Profile Pic"/> : <img src={images[idx]} alt="Profile Pic"/>}
            </div>
            <div className="details res-col-2-3">
               <div className="details-main">
                  <h3>{result.name}</h3>
                  <h4>{this.commonClasses(result.classes, this.props.currUser.classes)} classes common with you</h4>
               </div>
               <div className= "details-social">
                  <a href={`https://www.facebook.com/search/?q=${result.name}`} target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook"/></a>
                  <a href={`https://www.linkedin.com/search/results/all/?keywords=${result.name}`} target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a>
                  <a href={`https://www.twitter.com/search?q=${result.name}&f=user`} target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter"/></a>
               </div>
            </div>
         </div>
      ) : <p className="no-connections">NO CONNECTIONS FOUND</p>;

      return ( 
         <div className="flex-container ResultsPage">
            <div className="gradientBg res-col-1-4">
               <div className="header">
                  <div className="back-nav">
                     <Link to='/'><img src={back} alt="back"/></Link>
                  </div>
                  <div className="header-text">
                     <img src={images[10]} alt="Jack Mullen" className="main-user"/>
                     <h2>{name}</h2>
                     <h5>{email}</h5>
                  </div>
               </div>
               <div className="success-msg">
                  <h1> We have found {this.props.results.length} students!</h1>
               </div>
            </div>
            <div className="results res-col-3-4">
               <img className="top-img" src={results} alt=""/>
               <h2 className="results-h2">Results</h2>
               <div className="card-container">
                  {userList}
               </div>
            </div>
         </div>

      );
   }
}
 
export default ResultsPage;

