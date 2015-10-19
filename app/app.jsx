'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'

var NavList = React.createClass({

  render: function() {

    return (

      <ul>
        <li><Link to="/you">you</Link></li>
        <li><Link to="/friend">friend</Link></li>
        <li><Link to="/">world</Link></li>
      </ul>

    );
  }

});

var App = React.createClass({

  render: function() {

    return(
      <div>
        <h1>Hello world!</h1>
        <NavList/>
        {this.props.children}
      </div>
    );

  }

});

var You = React.createClass({

  render: function() {

    return (

      <div>
        <h1>Hello you!</h1>
        <NavList/>
      </div>

    );

  }

});

var Friend = React.createClass({

  render: function() {

    var num = Math.floor(Math.random() * 10);

    return (

      <div>
        <h1>Hello friend!</h1>
        <NavList/>
        <ul>
          <li>
            <Link to={'/number/' + num}>Number</Link>
          </li>
        </ul>
        {this.props.children}
      </div>

    );

  }

});

var Num = React.createClass({

  render: function() {

    return (

      <div>
        <h1>Hello friend number: {this.props.params.number}!</h1>
      </div>

    );

  }

});

ReactDOM.render(
  (<Router>
    <Route path="/" component={App}/>
    <Route path="you" component={You}/>
    <Route path="friend" component={Friend}>
      <Route path="/number/:number" component={Num}/>
    </Route>
  </Router>),
  document.getElementById('content')
);
