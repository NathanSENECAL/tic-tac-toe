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

   
   handleClick: function(){
		if(this.state.value === 'X')
		{
			this.state.value = 'O';
		}
		else
		{
			this.state.value = 'X';
		}
		
		this.setState({value: this.state.value})
   },
   
   /*componentWillMount : function() {
	setInterval(this.updateTime, 300);
   },
   
   updateTime : function(){
	if(this.state.value == 'X') this.setState({value : 'O'});
	else this.setState({value : 'X'});
   },*/

   'render': function onRender(){
    return (
	<div onClick={this.handleClick}>
      <button style={boxStyle}>{this.state.value}</button>
	</div>
    );
  }
});

React.render(<Box initialValue={'X'}/>, document.body);
