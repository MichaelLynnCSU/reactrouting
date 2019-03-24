import React from 'react';
import { Route, Link } from 'react-router-dom';
import FAQ from './FAQ/FAQ';
import Company from './Company/Company';

export default 


function About() {
  return (
    <div>
      <h1>This is the About component</h1>
      <h3><Link to='/About/Faq'>FAQ</Link></h3>
      <h3><Link to='/About/Company'>Company</Link></h3>

      <Route exact path="/About/Faq" component = {FAQ}/>
      <Route exact path="/About/Company" component = {Company}/>

    </div>
  )
}