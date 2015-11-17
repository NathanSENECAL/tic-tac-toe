'use strict';

var React = require('react');

var boxStyle = {
	height: '100px',
	width: '100px'
};

var Row = React.createClass({
	render : function(){
		return (
		<div>
			<tr>
				<td><Box initialValue={'-'} /></td>
				<td><Box initialValue={'-'} /></td>
				<td><Box initialValue={'-'} /></td>
			</tr>
		</div>
		)
	}
});

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
      <button style={boxStyle} onClick={this.handleClick}>{this.state.value}</button>
    );
  }
});

React.render(<Row initialValue={'X'}/>, document.body);
