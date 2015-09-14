import React from "react"
import Header from "../components/Header";
import Link1 from "../components/link1";
import Link2 from "../components/link2";

import { Router, Route, Link, IndexRoute } from 'react-router';
// import {Router} from 'react-router';

// if you are not using the extract-text plugin, uncomment below line.
// require('../../sass/page1.scss');

var Default = React.createClass({

  render: function() {
    return (
      <div >This is the default view</div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
});




 // React.render(< App/>, document.body, function(){});

React.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Default} />
      <Route path="link1" component={Link1} >

      </Route>
      <Route path="link2" component={Link2} />
    </Route>
  </Router>
), document.body)
