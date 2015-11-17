'use strict';

var React = require('react');

var boxStyle = {
	height: '100px',
	width: '100px'
};

var Box = React.createClass({
   
   getInitialState: function(){
       return {value: this.props.initialValue};
   },
   
   componentWillMount : function() {
	setInterval(this.updateTime, 300);
   },
   
   updateTime : function(){
	if(this.state.value == 'X') this.setState({value : 'O'});
	else this.setState({value : 'X'});
   },

   'render': function onRender(){
    return (
      <button style={boxStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue={'X'}/>, document.body);
