import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container'
import portfolioItem from './portfolio/portfolio-item';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Blake Allred Portfolio</h1>
        <div>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContainer/>
        
      </div>
    );
  }
}
