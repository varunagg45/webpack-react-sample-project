import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      'page': 'This is from Link 2'
    };
  },
  render: function() {
    return (
      <div>{this.state.page}</div>
    );
  }
});
