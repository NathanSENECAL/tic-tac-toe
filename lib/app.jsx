'use strict';

var React = require('react');

var boxStyle = {
	height: '100px',
	width: '100px'
};

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
   
   getInitialState: function(){
		return {value : this.props.initialValue};
   },
   
   handleClick : function() {
	this.setState({value: this.state.value + 1});
   },
   
  'render': function onRender () {
    return (
	//<div onClick={this.handleClick}>
      <button style={boxStyle}>{this.state.value}</button>
	//</div>
    );
  }
});

React.render(<Box initialValue = 'X'/>, document.body);
