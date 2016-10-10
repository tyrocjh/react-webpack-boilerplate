import React, { Component } from 'react';

import './App.scss';

export default class App extends Component {
  render() {
    return (
    	<div>
	      <h1>Hello World</h1>
	      <img src="images/avatar.jpg" alt="cat" />
	      <div className="bg-avatar"></div>
	    </div>
    );
  }
}
